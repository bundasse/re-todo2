import './App.css';
import Todoedit from './components/Todoedit';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          <p>오늘은</p>
          Mon. Jan. 01. 2024
        </h2>
      </header>
      <Todoedit />
      <Todolist />
    </div>
  );
}

export default App;
