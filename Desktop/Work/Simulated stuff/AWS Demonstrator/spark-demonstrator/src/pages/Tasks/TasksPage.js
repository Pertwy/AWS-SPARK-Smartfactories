import React from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../graphql/mutations"
import { sortString, dateFormat } from '../../components/utilityFuncs';

import "./tasks.css"
import moment from "moment"


export default function TasksPage({tasks}) {

    //Fix issue button
    //Currently inverses the "isComplete" variable for testing
    //It should set the "isComplete" variable to false
    async function updateTasks(id, isComplete){
        await API.graphql(graphqlOperation(mutations.updateTasks, {input: {id:id, isComplete:!isComplete}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
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
                
                {tasks.sort((a, b) => sortString(a.createdAt, b.createdAt)).map(({id, machineName, operator, workflowState, createdAt, nextUpdateDue, isComplete}) => {
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
