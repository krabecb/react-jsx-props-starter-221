import './ToDoList.css'
import ToDoListItem from './ToDoListItem'

// ToDoList.jsx
// 2 ways: 
// 1. pass in the keyword props -> props.header
// 2. destructure -> {header}
export default function ToDoList({header, todos}) {
    //We can log the props object to see what is available
    //We can also use the React dev extension to see our props!
    // console.log(props)
    //This space is where we do our JS logic.
    //We can initialize variables, we can manage state, and we can also define needed functions
    // const str = "SEI";
    // const score = 94;
    // const misc = ["This is our string", 7, false, <p>This is a react element!</p>]
    const toDoListItems = todos.map((t, idx) => <ToDoListItem key={idx} todo={t} index={idx}/>)
    return (
      <ul className="ToDoList">
        <h2>{header}</h2>
        {toDoListItems}
      </ul>
    );
  }
  