import React, { useState } from 'react'
import './Todoedit.css';

const Todoedit = ({newTodo}) => {
  const [content, setContent] = useState("");
  const OnChangeInput = (e) =>{
    setContent(e.target.value)
  }
  const onSubmit = () => {
    newTodo(content)
    setContent("")
  }
  return (
    <div>
        <h4>새로운 todo 작성하기 ✏</h4>
        <div className='editorWrapper'>
          <input type='text' placeholder='새로운 Todo...' onChange={OnChangeInput} value={content} />
          <button onClick={onSubmit}>추가</button>
        </div>
    </div>
  )
}

export default Todoedit