'use server'

import { revalidateTag } from "next/cache";
import { Post } from "./types";

export async function createPost(post: Post) {
    try {
        const res = await fetch(process.env.API_POSTS as string, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if (!res.ok) {
            throw new Error(`Unable to create post, status: ${res.status}`)
        }
        revalidateTag('posts');
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}