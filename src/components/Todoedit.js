import React from 'react'

const Todoedit = () => {
  const newTodo = () =>{
    
  }
  return (
    <div>
        <h4>새로운 todo 작성하기 ✏</h4>
        <div className='editerWrapper'>
          <input type='text' placeholder='새로운 Todo...' />
          <button onClick={newTodo}>추가</button>
        </div>
    </div>
  )
}

export default Todoedit