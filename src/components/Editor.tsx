import React, { useState } from 'react'
import TextEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  className?: string
}

const Editor: React.FC<EditorProps> = (props) => {

  const { className } = props
  const [editorState, setEditorState] = useState('')
  return (
    <div className='Editor'>
      <TextEditor preserveWhitespace={true} onChange={setEditorState} value={editorState} className="Editor__editor">
        <div />
      </TextEditor>
    </div>
  )
}

export default Editor