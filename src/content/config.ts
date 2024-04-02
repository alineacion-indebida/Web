import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        imagen: z.string().optional(),
        categorias: z.array(z.string()).default(['others']),
        tags: z.array(z.string()).default(['others']),
        autor: z.string().default('Indebiders'),
    }),
});

export const collections = { noticias };
