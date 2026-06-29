import type { Loader } from 'astro/loaders';
import matter from 'gray-matter';
import { marked } from 'marked';

interface Options {
  owner: string;
  repo: string;
  branch?: string;
  directory?: string;
}

type GitHubItem = { name: string; type: 'file' | 'dir'; download_url: string | null };

export function githubBlogLoader({
  owner,
  repo,
  branch = 'main',
  directory = 'blog-posts',
}: Options): Loader {
  return {
    name: 'github-blog-loader',
    async load({ store, logger, parseData }) {
      const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };

      const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents`;
      const listUrl = `${apiBase}/${directory}?ref=${branch}`;
      // console.log(`[github-blog-loader] Fetching from ${listUrl}`);
      let folders: GitHubItem[];
      try {
        const res = await fetch(listUrl, { headers });
        if (!res.ok) {
          logger.warn(`GitHub API ${res.status} — ${await res.text()}`);
          return;
        }
        folders = await res.json();
      } catch (err) {
        logger.error(`Failed to reach GitHub API: ${err}`);
        return;
      }

      const postFolders = folders.filter((item) => item.type === 'dir');
      store.clear();

      for (const folder of postFolders) {
        try {
          // Fetch the contents of this post's folder
          const folderUrl = `${apiBase}/${directory}/${folder.name}?ref=${branch}`;
          const folderRes = await fetch(folderUrl, { headers });
          if (!folderRes.ok) {
            logger.warn(`Skipped ${folder.name}: folder fetch returned ${folderRes.status}`);
            continue;
          }
          const folderItems: GitHubItem[] = await folderRes.json();

          // Prefer index.md, fall back to any .md file in the folder
          const mdFile =
            folderItems.find((f) => f.type === 'file' && f.name === 'index.md') ??
            folderItems.find((f) => f.type === 'file' && f.name.endsWith('.md'));

          if (!mdFile?.download_url) {
            logger.warn(`Skipped ${folder.name}: no .md file found`);
            continue;
          }

          const raw = await fetch(mdFile.download_url).then((r) => r.text());
          const { data, content } = matter(raw);
          const html = await marked(content);

          // Run frontmatter through the collection schema so validation and
          // defaults (e.g. `tags: [].default`) are applied — store.set() alone
          // would persist the raw frontmatter and skip the schema.
          const parsedData = await parseData({ id: folder.name, data });

          store.set({
            id: folder.name,   // folder name becomes the slug
            data: parsedData,
            body: content,
            rendered: { html },
          });
        } catch (err) {
          logger.warn(`Skipped ${folder.name}: ${err}`);
        }
      }

      logger.info(`Loaded ${postFolders.length} post(s) from ${owner}/${repo}/${directory}`);
    },
  };
}
