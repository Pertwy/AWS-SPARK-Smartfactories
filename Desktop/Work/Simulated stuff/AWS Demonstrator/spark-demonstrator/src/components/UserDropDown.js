import React, {useState} from 'react'
import { allUsers } from '../data/mockAllUsers'
import _ from 'lodash';

export default function UserDropDown({machine, setResults}) {
    
    const [selectedUser, setSelectedUser] = useState("")

    function setUser(user){
        setResults(machine, user)
        setSelectedUser(user)
    }
    
    return (
        <>
            <select 
                name="selectUser"
                value={selectedUser}
                onChange={e => setUser(e.target.value)}
            >


                <option value={null}>{"Choose User"}</option>
                {allUsers.map(user => <option key={_.uniqueId()} value={user.name}>{user.name}</option>)}


            </select>
        </>
    )
}

