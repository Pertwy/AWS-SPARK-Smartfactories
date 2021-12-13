import React from 'react'
import UserDropDown from '../../components/UserDropDown'
import _ from 'lodash';

export default function AssignRolesPage({machines}) {
    
    let results = {}

    function handleSaveRoles(){
        alert("Roles have been saved")
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
                    
                    {machines.map(({name}) => {
                        return(
                        <tr key={_.uniqueId()}>
                            <td>{name}</td>
                            <td><UserDropDown machine={name} setResults={setResults}/></td>
                        </tr>
                        )
                    })}
                </table>
            </div>

            <button onClick={()=>{handleSaveRoles()}}>Save</button>
        </>
    )
}
