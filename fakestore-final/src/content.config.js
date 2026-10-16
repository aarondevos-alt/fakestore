// 1. Import utilities from `astro:content`, and Zod from `astro/zod`
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// 2. Import loader(s)
import { file } from "astro/loaders";

// 3. Define your collection(s)
const products = defineCollection({
  loader: file("src/data/products.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { products };
