import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    image: z.string().default("/images/events/event-placeholder.svg"),
    summary: z.string(),
  }),
});

export const collections = { events };
