import './ToDoListItem.css'

export default function ToDoListItem(props) {
    // console.log(props)
    return (
        <li className="ToDoListItem" style={{
            backgroundColor: "blue", color: "white"
        }}>{`${props.index}: ${props.todo}`}</li>
    )
}