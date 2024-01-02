import React from 'react'

const Todoedit = () => {
  const newTodo = () =>{
    
  }
  return (
    <div>
        <div>새로운 todo 작성하기</div>
        <input type='text' placeholder='새로운 Todo...' />
        <button onClick={newTodo}>추가</button>
    </div>
  )
}

export default Todoedit