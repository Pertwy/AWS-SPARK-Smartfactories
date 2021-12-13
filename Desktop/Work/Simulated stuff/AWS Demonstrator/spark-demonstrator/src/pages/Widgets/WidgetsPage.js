import React, {useState, useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import {diversionReasons} from "../../data/diversionReasons"
import _ from 'lodash';
import moment from 'moment';
import * as mutations from "../../graphql/mutations"


import Widget from './components/Widget'
import WidgetWrapper from './components/WidgetWrapper'
import DiversionReason from './components/DiversionReason'
import Draggable from '../../components/Draggable'


export default function WidgetsPage({machines}) {

    const [selectedMachine, setSelectedMachine] = useState(null)
    let scheduleTest = [
            {
                machine:"Dough Mixer #8",
                operator:"Rapheal"
            },
            {
                machine:"Dough Mixer #3",
                operator:"Dan"
            },
        ]
    const taskCompletionTime = 60

    async function updateMachine(machineEditData){
        await API.graphql(graphqlOperation(mutations.updateMachine, {input: machineEditData}))
            .then(res => createTasks(res.data.updateMachine))
            .catch((err) => console.error(err))
    }


    async function createDiversion(reason){
        await API.graphql(graphqlOperation(mutations.createDiversion, {input: {machineID:2, machineName:selectedMachine, reason:reason, code:"Maintenance"}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }

    async function createTasks({name}){
        await API.graphql(graphqlOperation(mutations.createTasks, {input: {machineName:name, operator:returnOperator(name), workflowState:"SiteWise Event Error", isComplete: false, nextUpdateDue:newTime(taskCompletionTime)}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }
    //nextUpdateDaue: newTime(60)

    function handleReasonClick(reason){
        alert(`Assign ${reason} to ${selectedMachine}`)
        createDiversion(reason)
    }

    function returnOperator(machineName){
        return scheduleTest.filter(element => element.machine === machineName)[0]["operator"]
    }

    function newTime(taskCompletionTime){
        return moment().add(taskCompletionTime, 'minutes').format()
    }

    

    


    return (
        <div className="widget-section">
            <Draggable info={machines} updateMachine={updateMachine}>
            {/* <button onClick={()=>TestTime()}>Test</button> */}

            <div className="grid fifth reason-buttons">
                {diversionReasons.map(diversion => <DiversionReason key={_.uniqueId()} reason={diversion} handleReasonClick={handleReasonClick}/>)}
            </div>

            <div className="test">
                <WidgetWrapper wrap={false}>
                    {machines.map(({name, ragOuter, ragInner, mcdown, currentdowntime, cumulativedowntime}) => {
                    return(
                        <>
                            {(ragOuter !== "green" || ragInner !== "green") && (
                                <Widget 
                                    key={_.uniqueId()}
                                    selectedMachine={selectedMachine} 
                                    setSelectedMachine={setSelectedMachine} 
                                    machineName={name} 
                                    innerRAG={ragOuter} 
                                    outerRAG={ragInner}
                                    mcdown={mcdown} 
                                    currentdowntime={currentdowntime} 
                                    cumulativedowntime={cumulativedowntime} />
                            ) }
                        </>
                    )
                    })}
                </WidgetWrapper>
            </div>

            </Draggable>
        </div>      
    )
}
