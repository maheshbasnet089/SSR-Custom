import { FC } from "react"


type Todo = {
    id : string, 
    title : string
}
type Props = {
    todos : Todo[]
}

const App :FC<Props> = ({todos})=>(
    <ul>
        {todos.map(todo=>(
            <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
)
export default App