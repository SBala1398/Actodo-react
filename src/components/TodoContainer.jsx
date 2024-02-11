import TodoList from "./TodoList"
import AddTodoFrom from "./AddTodoFrom"
import { useState } from "react"


function TodoContainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "wake up 5 AM"
        },
        {
            id: 2,
            activity: "Go to Gym"
        },
        {
            id: 3,
            activity: "Take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                <AddTodoFrom activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    )
}
export default TodoContainer