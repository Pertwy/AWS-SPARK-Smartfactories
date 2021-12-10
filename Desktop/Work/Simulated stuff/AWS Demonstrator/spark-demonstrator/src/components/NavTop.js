import React from 'react'
import "./navTop.css"
import _ from 'lodash';

export default function NavTop({selectedTab, setSelectedTab}) {
    

    const tabs = ["Widgets", "All Machines", "All Defects", "Tasks", "Diversions", "Assign Roles"]
    
    
    return (
        <div className="nav-top">

            <div className="branding-wrapper"></div>


            {tabs.map(tab => {
                return(
                    <div key={_.uniqueId()} onClick={()=>{setSelectedTab(tab)}} className={selectedTab===tab ? "active tab" : "inactive tab" }>
                        <p className="tab-label">{tab}</p>
                    </div>
                )
            })}
        </div>
    )
}
