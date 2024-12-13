'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import { Post } from '@/lib/types'
import { createPost } from '@/lib/actions'

const Tiptap = () => {
  const editorTitle = useEditor({
    extensions: [StarterKit],
    content: '<p>Your post title</p>',
    immediatelyRender: false,
  })

  const editorMain = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello, Gather The Geeks! 🌎️</p>',
    immediatelyRender: false,
  })

  const blogTitle = editorTitle?.getText();
  const blogContent = editorMain?.getText();

  const post: Post = {
    title: blogTitle ?? "No title found",
    content: blogContent ?? "No blog content found",
    author: "Rhys",
    likes: 0
  }
  
  console.log(post)

  return (
    <main className="space-y-2">
      <EditorContent 
        editor={editorTitle} 
        className="bg-lighter_background px-6 py-2 rounded-sm text-3xl" 
      />
      <EditorContent 
        editor={editorMain} 
        className="bg-lighter_background p-6 rounded-sm" 
      />
      <section className="mt-2 flex justify-end">
        <Button onClick={() => createPost(post)} className="bg-lightning_yellow hover:opacity-50 transition-all rounded-sm">Submit post</Button>
      </section>
    </main>
  )
}

export default Tiptap
