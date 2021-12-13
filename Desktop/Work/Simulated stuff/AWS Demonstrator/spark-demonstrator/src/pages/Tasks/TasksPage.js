import React from 'react'
import { tasks } from '../../data/mockTasks'
import "./tasks.css"
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import * as mutations from "../../graphql/mutations"
import moment from "moment"
export default function TasksPage({tasks}) {

    async function updateTasks(id, isComplete){
        await API.graphql(graphqlOperation(mutations.updateTasks, {input: {id:id, isComplete:!isComplete}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }


    function dateFormat(date){
        let newDate = new Date(date)
        return(newDate.toISOString().substring(0, 19).replace("T", " "))
    }



    return (
         <div className="table">

            <table >
                <tr>
                    <th>Machine</th>
                    <th>Operator On Duty</th>
                    <th>Workflow State</th>
                    <th>Created</th>
                    <th>Next update due</th>
                    <th>Overdue</th>
                </tr>
                
                {tasks.map(({id, machineName, operator, workflowState, createdAt, nextUpdateDue, isComplete}) => {
                    return(
                    <tr key={id} className={(isComplete === true) ? "greyed-background" : ""}>
                        <td>{machineName}</td>
                        <td>{operator}</td>
                        <td>{workflowState}</td>
                        <td>{dateFormat(createdAt)}</td>
                        <td>{dateFormat(nextUpdateDue)}</td>
                        <td>{nextUpdateDue <= moment().format() ? "!" : ""}</td>
                        <td><button onClick={()=>updateTasks(id, isComplete)}>Fix Issue</button></td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}
