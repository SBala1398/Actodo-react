import { useState } from "react"

function AddTodoFrom(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity, setNewactivity] = useState("")
    function handlechange(evt) {
        setNewactivity(evt.target.value)
    }
    function addActivity() {
        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newactivity }])
        setNewactivity("")

    }


    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium "> Manage Activities</h1>
            <div>
                <input value={newactivity} onChange={handlechange} type="text" className="border-black  p-1 bg-white w-fit" placeholder="Next Activity?"></input>
                <button onClick={addActivity} className="bg-black  text-white p-1 border border-black w-fit">ADD</button>
            </div>
        </div>
    )
}
export default AddTodoFrom