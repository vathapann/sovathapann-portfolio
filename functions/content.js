import { deployGuideSteps as localDeployGuideSteps } from "../src/data/deployGuideSteps.js";
import { journalEntries as localJournalEntries } from "../src/data/journalEntries.js";

export const onRequestGet = async ({ env }) => {
  let deployGuideSteps = localDeployGuideSteps;
  let journalEntries = localJournalEntries;

  if (env?.CONTENT_KV) {
    try {
      const [deployJson, journalJson] = await Promise.all([
        env.CONTENT_KV.get("deployGuideSteps"),
        env.CONTENT_KV.get("journalEntries"),
      ]);

      if (deployJson) deployGuideSteps = JSON.parse(deployJson);
      if (journalJson) journalEntries = JSON.parse(journalJson);
    } catch (error) {
      console.error("Failed to read KV content, falling back to local data", error);
    }
  }

  return Response.json({
    deployGuideSteps,
    journalEntries,
  });
};
