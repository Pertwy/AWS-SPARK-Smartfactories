import React, {useState} from 'react'
import { allUsers } from '../data/mockAllUsers'

export default function SimpleUserDropDown({user, setUser}) {
        
    return (
        <>
            <select 
                name="selectUser"
                value={user}
                onChange={e => setUser(e.target.value)}
            >


                <option value={null}>{"Choose User"}</option>
                {allUsers.map(user => <option value={user.name}>{user.name}</option>)}


            </select>
        </>
    )
}