import React from 'react'
import './Todoitem.css'

const Todoitem = ({id, content, isDone, createdDate}) => {
  return (
    <div className='TodoItem'>
        <input type='checkbox' className='checkboxCol' checked={isDone}/>
        <p className='titleCol'>{content}</p>
        <span className='dateCol'>{createdDate}</span>
        <button className='btnCol'>삭제</button>
    </div>
  )
}

export default Todoitem