export async function getPosts(){ 
    try {
        const res = await fetch(process.env.API_POSTS as string, {
            method: "GET",
            headers: {
                'Accept': '*/*'
            },
            next: { tags: ['posts'] }
        })
        if (!res.ok) {
            throw new Error(`Unable to fetch posts, status: ${res.status}`)
        }
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}

export async function getPost(id: string){ 
    try {
        const res = await fetch(process.env.API_POSTS as string + `/${id}`, {
            method: "GET",
            headers: {
                'Accept': '*/*'
            },
        })
        if (!res.ok) {
            throw new Error(`Unable to fetch posts, status: ${res.status}`)
        }
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}