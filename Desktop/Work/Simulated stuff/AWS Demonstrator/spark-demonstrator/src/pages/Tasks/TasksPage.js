import React from 'react'
import { tasks } from '../../data/mockTasks'


export default function TasksPage() {
    
    function handleFix(){
        alert("Enter how you fixed it??? or what the issue is???")
    }

    // useEffect(() => {
    //     if(masterUser){
    //         console.log(masterUser.toString())
    //         console.log(tasks.filter(diversion => diversion.operatorOnDuty === "Herald"))
    //         setFilteredtasks(tasks.filter(diversion => diversion.operatorOnDuty === {masterUser}))
    //     }
    // }, [masterUser])


    return (
         <div className="table">

            {/* <p >Add some filters</p> */}

            <table >
                <tr>
                    <th>Machine</th>
                    <th>Operator On Duty</th>
                    <th>Workflow State</th>
                    <th>Next update due</th>
                    <th>Created</th>
                    <th>Overdue</th>
                </tr>
                
                {tasks.map((task) => {
                    return(
                    <tr>
                        <td>{task.machine}</td>
                        <td>{task.operatorOnDuty}</td>
                        <td>{task.workflowState}</td>
                        <td>{task.nextUpdateDue}</td>
                        <td>{task.timeOfOccurance}</td>
                        <td>{task.overdue ? "!" : ""}</td>
                        <td><button onClick={()=>handleFix()}>Fix Issue</button></td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}
