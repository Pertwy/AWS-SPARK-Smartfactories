import React, { useEffect, useState } from 'react'
import "./widget.css"


export default function Widget({selectedMachine, setSelectedMachine, machineName, innerRAG, outerRAG, mcdown, currentdowntime, cumulativedowntime}) {
    
    let active = (machineName===selectedMachine) ? "widget-selected" : ""
    const [counter, setCounter] = useState(0)

    let downtimeTopRAG

    if(outerRAG === "green"){
        downtimeTopRAG = "grey-background"
    } else if((outerRAG === "amber" && innerRAG === "green") || (outerRAG === "amber" && innerRAG === "amber") || (outerRAG === "red" && innerRAG === "green")) {
        downtimeTopRAG = "amber"
    } else downtimeTopRAG = "red"



    useEffect(() => {
        if(outerRAG === "red" || innerRAG === "red"){
            startTimer()
        }
    }, [])

    let count = 0
    function startTimer(){
        count = count+1
        setCounter(count)
        // runMachine()
        setTimeout(startTimer, 1000)
    }

    function formatTime(seconds){
        return `${Math.floor(seconds/60)}:${seconds%60}`
    }



    return (
        <div onClick={()=>{setSelectedMachine(machineName)}} className={`widget ${active}`}>

            <h5>{machineName}</h5>

            <div className={`row widget-data `}>
                <div className={`outer-widget ${outerRAG}`}>
                    <div className={`inner-widget ${innerRAG}`}>

                    </div>
                </div>

                <div className="downtime-wrapper">
                    <div className={`dt ${downtimeTopRAG} mcdown`}>
                        <div>
                            {downtimeTopRAG !== "grey-background" && (
                                <p>MC DOWN</p>
                            )}
                        </div>
                    </div>
                    <div className={`dt black`}>
                        <div>
                            <p>Current Downtime</p>
                            <p>{formatTime(counter)}</p>
                        </div>
                    </div>
                    <div className={`dt`}>
                        <div>
                            <p>Cumulative Downtime</p>
                            <p>{cumulativedowntime}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
