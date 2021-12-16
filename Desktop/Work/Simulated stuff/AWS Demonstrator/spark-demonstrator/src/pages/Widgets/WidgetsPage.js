import React, {useState, useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import {diversionReasons} from "../../data/diversionReasons"
import _ from 'lodash';
import moment from 'moment';
import * as mutations from "../../graphql/mutations"

import {mockSchedule} from "../../data/mockSchedule"

import Widget from './components/Widget'
import WidgetWrapper from './components/WidgetWrapper'
import DiversionReason from './components/DiversionReason'
import Draggable from '../../components/Draggable'


export default function WidgetsPage({machines}) {

    const [selectedMachine, setSelectedMachine] = useState(null)

    //This is the time till the "next update due"
    const taskCompletionTime = 60


    //Updates machine with the RAG data
    //This function is passed to the draggable test element 
    async function updateMachine(machineEditData){
        await API.graphql(graphqlOperation(mutations.updateMachine, {input: machineEditData}))
            .then(res => createTasks(res.data.updateMachine))
            .catch((err) => console.error(err))
    }


    //After the machie rag status is updates, a task is created
    async function createTasks({name}){
        await API.graphql(graphqlOperation(mutations.createTasks, {input: {machineName:name, operator:returnOperator(name), workflowState:"SiteWise Event Error", isComplete: false, nextUpdateDue:newTime(taskCompletionTime)}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }


    async function createDiversion(reason){
        await API.graphql(graphqlOperation(mutations.createDiversion, {input: {machineID:2, machineName:selectedMachine, reason:reason, code:"Maintenance"}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }


    function handleReasonClick(reason){
        alert(`Assign ${reason} to ${selectedMachine}`)
        createDiversion(reason)
    }


    //checks the schedule to see which operator is attached to which machines
    function returnOperator(machineName){
        return mockSchedule.filter(element => element.machine === machineName)[0]["operator"]
    }


    //returns the current time + taskCompletionTime
    //in the AWSDAteTime format
    function newTime(taskCompletionTime){
        return moment().add(taskCompletionTime, 'minutes').format()
    }


    return (
        <div className="widget-section">
            <Draggable info={machines} updateMachine={updateMachine}>

                <div className="grid fifth reason-buttons">
                    {diversionReasons.map(diversion => <DiversionReason key={_.uniqueId()} reason={diversion} handleReasonClick={handleReasonClick}/>)}
                </div>

                <div className="test">
                    <WidgetWrapper wrap={false}>
                        {machines.map(({name, ragOuter, ragInner, currentdowntime, cumulativedowntime}) => {
                        return(
                            <>
                                {/* This only returns the Widget if one of the rag stauses is not green */}
                                {(ragOuter !== "green" || ragInner !== "green") && (
                                    <Widget 
                                        key={_.uniqueId()}
                                        selectedMachine={selectedMachine} 
                                        setSelectedMachine={setSelectedMachine} 
                                        machineName={name} 
                                        innerRAG={ragOuter} 
                                        outerRAG={ragInner}
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
