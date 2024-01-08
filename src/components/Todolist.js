import React from 'react'
import './Todolist.css';
import Todoitem from './Todoitem';

const Todolist = ({todo}) => {
  return (
    <div>
        <h4>Todo List🌱</h4>
        <input type='text' className='searchBar' placeholder='검색어를 입력하세요' />
        <ul>
          {todo.map((it) => (
            <li>
                <Todoitem key={it.id} {...it} />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todolist