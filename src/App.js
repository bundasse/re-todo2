import './App.css';
import Todoedit from './components/Todoedit';
import Todolist from './components/Todolist';
import React from 'react';

function App() {
  const today = new Date()
  const [todo , setTodo] = React.useState([]);
  console.log(todo)
  return (
    <div className="App">
      <header>
        <h2>
          <p>오늘은</p>
          <p>
            {today.toDateString()}
          </p>
        </h2>
      </header>
      <Todoedit />
      <Todolist />
    </div>
  );
}

export default App;
