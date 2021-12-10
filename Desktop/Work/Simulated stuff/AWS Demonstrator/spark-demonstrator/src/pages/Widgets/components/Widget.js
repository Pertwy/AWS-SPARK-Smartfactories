import React from 'react'
import "./widget.css"


export default function Widget({selectedMachine, setSelectedMachine, machineName, innerRAG, outerRAG, mcdown, currentdowntime, cumulativedowntime}) {
    
    let active = (machineName===selectedMachine) ? "widget-selected" : ""

    let downtimeBotRAG
    let downtimeMidRAG
    let downtimeTopRAG

    if(mcdown === "MC Down"){
        downtimeTopRAG = "red"
    } else {
        downtimeTopRAG = "green"
    }

    if(currentdowntime === 0){
        downtimeMidRAG = "green"
    } else if(currentdowntime > 0){
        downtimeMidRAG = "red"
    }

    if(currentdowntime === 0){
        downtimeBotRAG = "green"
    } else if(currentdowntime > 300){
        downtimeBotRAG = "red"
    }else if(currentdowntime > 0){
        downtimeBotRAG = "amber"
    }



    return (
        //  <div onClick={()=>{updateMachine()}} className={`widget`}>
        <div onClick={()=>{setSelectedMachine(machineName)}} className={`widget ${active}`}>

            <h5>{machineName}</h5>

            <div className={`row widget-data `}>
                <div className={`outer-widget ${outerRAG}`}>
                    <div className={`inner-widget ${innerRAG}`}>

                    </div>
                </div>

                <div className="downtime-wrapper">
                    <div className={`dt downtime-top ${downtimeTopRAG}`}>
                        <p>M/C DOWN</p>
                        <p>{mcdown}</p>
                    </div>
                    <div className={`dt downtime-mid ${downtimeMidRAG}`}>
                        <p>Current Downtime</p>
                        <p>{currentdowntime}</p>
                    </div>
                    <div className={`dt downtime-bot ${downtimeBotRAG}`}>
                        <p>Cumulative Downtime</p>
                        <p>{cumulativedowntime}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
