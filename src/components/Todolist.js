import React from 'react'

const Todolist = () => {
  return (
    <div>
        <h4>Todo List</h4>
        <input type='text' className='searchBox' placeholder='검색어를 입력하세요' />
        <ul>
            <li>
                <input type='checkbox' />
                <p></p>
                <span className='date'>2023.01.01</span>
                <button>삭제</button>
            </li>
        </ul>
    </div>
  )
}

export default Todolist