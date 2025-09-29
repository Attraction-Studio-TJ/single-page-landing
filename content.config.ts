import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: 'pages/**',
      schema: z.object({
        title: z.string()
      })
    })
  }
})
