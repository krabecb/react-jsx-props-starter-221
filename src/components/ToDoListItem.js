import './ToDoListItem.css'

export default function ToDoListItem(props) {
    // console.log(props)
    return (
        <li className="ToDoListItem" style={{
            backgroundColor: props.index % 2 ? "lavender" : "plum"
        }}>
            <span className="index">{props.index}</span>
            &nbsp;
            {props.todo}
        </li>
    )
}