<<<<<<< Updated upstream:src/components/list.js
export default function list() {
=======
import './ToDoListItem.css'

export default function ToDoListItem(props) {
    // console.log(props)
>>>>>>> Stashed changes:src/components/ToDoListItem.js
    return (
        <li className="ToDoListItem" style={{
            backgroundColor: "blue", color: "white"
        }}>{`${props.index}: ${props.todo}`}</li>
    )
}