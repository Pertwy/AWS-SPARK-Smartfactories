import React from 'react'
import UserDropDown from '../../components/UserDropDown'
import { allMachines } from '../../data/mockAllMachines'
import _ from 'lodash';

export default function AssignRolesPage({machines}) {
    
    let results = {}


    function handleSaveRoles(){
        //set the roles in the database
        alert("Roles have been saved")
        console.log(results)
    }


    function setResults(machine, user){
        results[machine] = user
    }

    
    return (
        <>
            <div className="table">
                <table >
                    <tr>
                        <th>Machine</th>
                        <th>Set Operator</th>
                    </tr>
                    
                    {machines.map((machine) => {
                        return(
                        <tr key={_.uniqueId()}>
                            <td>{machine.name}</td>
                            <td><UserDropDown machine={machine.name} setResults={setResults}/></td>
                        </tr>
                        )
                    })}
                </table>
            </div>

            <button onClick={()=>{handleSaveRoles()}}>Save</button>
        </>
    )
}
