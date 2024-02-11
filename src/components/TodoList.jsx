
import TodoItem from "./TodoItem"

function TodoList(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <div className="bg-[#acbbf3] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activities</h1>

            {activityArr.length === 0 ? <p>You haven't add anything yet</p> : ""}
            {
                activityArr.map(function (item, index) {
                    return <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
            }
        </div>
    )
}
export default TodoList
