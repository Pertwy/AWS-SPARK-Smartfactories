import React from 'react'

export default function GenericDropDown({name, data, def, info, setInfo}) {
        
    return (
        <>
            <select 
                name={name}
                value={info}
                onChange={e => setInfo(e)}
            >

                <option value={null}>{def}</option>
                {data.map(element => <option value={element}>{element}</option>)}

            </select>
        </>
    )
}
