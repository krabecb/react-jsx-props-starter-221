import './App.css';
import ToDoList from './components/ToDoList'

function App() {
  //Props: We can pass data as a prop to a rendered component which can then be used or passed as a prop again
  //Why we might keep data at the highest component
  const header = "Today's tasks"
  const todos = [
    'Have fun',
    'Learn React',
    'Learn the MERN-stack!'
  ]
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList header={header} todos={todos}/>
    </div>
  );
}

export default App;
