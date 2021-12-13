import React from 'react'
import "./navTop.css"
import _ from 'lodash';

export default function NavTop({selectedTab, setSelectedTab, isRed}) {
    

    const tabs = ["Widgets", "All Machines", "All Defects", "Diversions", "Assign Roles"]
    
    const red = (isRed === true) ? "red-background" : ""

    let taskTabColour 
    if (selectedTab==="Tasks" && isRed===true) taskTabColour = "tasks-active tab"
    else if(selectedTab!=="Tasks" && isRed===true) taskTabColour = "tasks-inactive tab"
    else if(selectedTab==="Tasks" && isRed===false) taskTabColour = "active tab"
    else taskTabColour = "inactive tab"

    return (
        <div className="nav-top">

            <div className="branding-wrapper"></div>


            {tabs.map(tab => {
                return(
                    <div key={_.uniqueId()} onClick={()=>{setSelectedTab(tab)}} className={selectedTab===tab ? `active tab` : `inactive tab` }>
                        <p className="tab-label">{tab}</p>
                    </div>
                )
            })}

            <div key={_.uniqueId()} onClick={()=>{setSelectedTab("Tasks")}} className={`${taskTabColour}`}>
                <p className="tab-label">Tasks</p>
            </div>

        </div>
    )
}
