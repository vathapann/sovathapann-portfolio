import { defineCollection, z } from 'astro:content';
import { githubBlogLoader } from '../lib/githubBlogLoader';

const blog = defineCollection({
  loader: githubBlogLoader({
    owner: 'vathapann',
    repo: 'lab',              // GitHub repo: github.com/vathapann/lab
    branch: 'main',
    directory: 'blog-posts',  // each subfolder inside here is one post
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog };
