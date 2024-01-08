import './App.css';
import Todoedit from './components/Todoedit';
import Todolist from './components/Todolist';
import React from 'react';
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    createdDate: 20240108
  },
  {
    id: 1,
    isDone: false,
    content: "설거지",
    createdDate: 20240108
  },
  {
    id: 2,
    isDone: true,
    content: "1일 1커밋",
    createdDate: 20240108
  }
]

function App() {
  const [todo , setTodo] = React.useState(mockTodo);
  const idRef = React.useRef(0)
  const newTodo = (content) =>{
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();
    const today = y+'-'+m+'-'+d;
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: today
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
    
  }
  return (
    <div className="App">
      <header>
          <h3>오늘은 📅</h3>
          <h1>
            {new Date().toDateString()}
          </h1>
      </header>
      <Todoedit newTodo={newTodo} />
      <Todolist todo={todo} />
    </div>
  );
}

export default App;
