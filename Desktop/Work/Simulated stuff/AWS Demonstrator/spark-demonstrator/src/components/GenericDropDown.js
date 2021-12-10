import React from 'react'

export default function GenericDropDown({data, def, info, setInfo}) {
        
    return (
        <>
            <select 
                name="selectUser"
                value={info}
                onChange={e => setInfo(e.target.value)}
            >

                <option value={null}>{def}</option>
                {data.map(element => <option value={element}>{element}</option>)}

            </select>
        </>
    )
}