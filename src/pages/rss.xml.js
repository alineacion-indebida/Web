import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('noticias');
    return rss({
        title: "Alineación indebida - El programa del deporte salmantino",
        description: "Web Oficial del programa Alineación Indebida. El programa de Unionistas de Salamanca y todo el deporte salmantino",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/noticias/${post.slug}/`
        })),
    });
}
