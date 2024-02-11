
function TodoItem(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr


    function handleDelete(deleteid) {
        const updatedActivityArr = activityArr.filter(item => item.id !== deleteid);

        setActivityArr(updatedActivityArr);
    }


    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-800 " onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )

}
export default TodoItem