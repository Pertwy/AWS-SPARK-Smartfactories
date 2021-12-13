import React, {useState} from 'react'
import _ from "lodash"


export default function Draggable({children, info, updateMachine}) {

    const [draggable, setDraggable] = useState(false)
    const [machineEditData, setMachineEditData] = useState({id:"", ragInner:"", ragOuter:""})

    function drag_start(event) {
        var style = window.getComputedStyle(event.target, null);
        var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
        event.dataTransfer.setData("Text", str);
    }

    function drop(event) {
        var offset = event.dataTransfer.getData("Text").split(',');
        var dm = document.getElementById(offset[2]);
        dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        event.preventDefault();
        return false;
    }

    function drag_over(event) {
        event.preventDefault();
        return false;
    }

    


    function editMachineData(e){
        let name = e.target.name
        let value = e.target.value
        setMachineEditData({...machineEditData, [name]:value})
    }



    return (
        <div onDragOver={(e)=>{drag_over(e)}} onDrop={(e)=>{drop(e)}}>
            {draggable && (
                <ul>
                        <li id="txt1" draggable="true" onDragStart={(e)=>{drag_start(e)}}> 
                            <p>Simulate Sitewise Event                          </p>
                            <select
                                name="id"
                                value={machineEditData.id}
                                onChange={e => editMachineData(e)}
                            >
                                <option value={null}>Select a Machine</option>
                                {info.map(widget => {
                                    return(
                                        <option key={_.uniqueId()} value={widget.id}>{widget.name}</option>
                                    )
                                })}
                                
                            </select>

                            <select
                                name="ragInner"
                                value={machineEditData.ragInner}
                                onChange={e => editMachineData(e)}
                            >
                                <option value={null}>Inner Rag Edit</option>
                                <option value="green">green</option>
                                <option value="amber">amber</option>
                                <option value="red">red</option>
                            </select>

                            <select
                                name="ragOuter"
                                value={machineEditData.ragOuter}
                                onChange={e => editMachineData(e)}
                            >
                                <option value={null}>Outer RAG Edit</option>
                                <option value="green">green</option>
                                <option value="amber">amber</option>
                                <option value="red">red</option>
                            </select>

                            <button onClick={()=>updateMachine(machineEditData)}>Save</button>


                        </li>
                </ul>
            )}

            {children}

            <button className="abs-button" onClick={()=>setDraggable(!draggable)}>{!draggable ? "Test" : "Stop Test"}</button>
        </div>
    )
}
