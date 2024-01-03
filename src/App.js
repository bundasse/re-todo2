import './App.css';
import Todoedit from './components/Todoedit';
import Todolist from './components/Todolist';
import React from 'react';

function App() {
  const [todo , setTodo] = React.useState([]);
  console.log(todo)
  return (
    <div className="App">
      <header>
          <h3>오늘은 📅</h3>
          <h1>
            {new Date().toDateString()}
          </h1>
      </header>
      <Todoedit />
      <Todolist />
    </div>
  );
}

export default App;
