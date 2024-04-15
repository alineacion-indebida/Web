/* eslint-disable */
import { getCollection } from 'astro:content';
import type { MDXInstance } from 'astro';
import { slugify, deslugify } from './slug';

interface Post {
    date: Date;
    title: string;
    description: string;
    imagen: string;
    categorias: string[];
    tags: string[];
    autor: string;
};

export function getAllTags(posts: MDXInstance<Post>[] = []) {
    const allTags = new Set<string>();
    posts.forEach((post: any) => {
        post.data?.tags?.map((tag: string) => allTags.add(tag.toLowerCase()));
    });
    return [...allTags];
}

export const getTaxonomy = async (collection: any, name: string) => {
    const singlePages = await getCollection(collection);
    const taxonomyPages = singlePages.map((page: any) => page.data[name]);
    let taxonomies: any = [];
    for (let i = 0; i < taxonomyPages.length; i++) {
        const categoryArray = taxonomyPages[i];
        for (let j = 0; j < categoryArray.length; j++) {
            taxonomies.push({
                name: categoryArray[j],
                slug: slugify(categoryArray[j]),
            });
        }
    }
    const taxonomy = [...new Set(taxonomies)];
    return taxonomy;
};

export const getSinglePage = async (collection: any) => {
    const allPage = await getCollection(collection);
    var formattedPosts = allPage
    if(collection=="noticias"){
        var formattedPosts = allPage.sort(
            (a:any, b:any) => new Date(b.data.date.valueOf()).getTime() - new Date(a.data.date.valueOf()).getTime()
        )
    }
    const removeIndex = formattedPosts.filter((data: any) => data.id.match(/^(?!-)/));
    const removeDrafts = removeIndex.filter((data: any) => !data.data.draft);
    return removeDrafts;
};

export const taxonomyFilter = (posts: any[], name: string, key: any) =>
    posts.filter((post) => post.data[name].map((name: string) => deslugify(name)).includes(deslugify(key)));

const categoriaCronicas = [
    "La Opinión Indebida",
    "La Firma Destacada"
]

export const getCronicas = async () => {
    const allNews = await getCollection("noticias", ({ data }) => {
        return categoriaCronicas.some(cat => data.categorias.includes(cat))
    });

    const formattedPosts = allNews.sort(
        (a, b) => new Date(b.data.date.valueOf()).getTime() - new Date(a.data.date.valueOf()).getTime()
    )
    return formattedPosts;
}
