import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const quizCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "./src/quizzes" }),
  schema: z.object({
    title: z.string(),
    variations: z.number(),
    questions: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        options: z.array(z.string()),
      })
    ),
  }),
});

export const collections = {
  quizCollection,
};
