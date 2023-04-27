import './App.css';
import { useState } from 'react'
import ToDoList from './components/ToDoList'

function App() {
  // basic syntax: const [data, setData] = useState()
  // Deciding what should be held in state: Zakariah: Any data that needs to change, you should probably use state. Common structure of functional component: Usestate(s) which handle all of your data/data manipulation. Functions such as addTodo() to interact with state data. And then you may have your data mapped to variables(mapping can also be done within the JSX as well)
  // todos is a variable that will hold our state data
  // setTodos is built-in useState method which allows us to update the todos data
  // setTodos is a async operation. Example: Requesting data on national parks and other outdoor-related services -> could be an extensive amount of data. So to actually set that data in state it could be a few milliseconds, coulbe a half a second and sometimes 5+ seconds. Component rerenders once setData is complete.
  // useState can also have 'starting data' for the todos variable. This may be a good idea if you want to pre-populate or show something right away to the user.
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-stack"
  ])
  // console.log(todos)
  //We can have more than one useState. We can have a useState that tracks todos, we can also track the logged in user, we can also track what day of the week it is. 
  const [showTodos, setShowTodos] = useState(true)
  //Props: We can pass data as a prop to a rendered component which can then be used or passed as a prop again
  //Why we might keep data at the highest component
  const header = "Today's tasks"
  // const todos = [
  //   'Have fun',
  //   'Learn React',
  //   'Learn the MERN-stack!'
  // ]
  return (
    <div className="App">
      <h1>React To-Do</h1>
      {showTodos && <ToDoList header={header} todos={todos}/>}
    </div>
  );
}

export default App;
