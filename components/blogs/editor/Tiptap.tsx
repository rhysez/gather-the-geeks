'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
  })

  const textContent = editor?.getText();

  return (
    <EditorContent 
       editor={editor} 
       className="bg-lighter_background p-6" 
    />
  )
}

export default Tiptap
