import React, {useState, useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import {diversionReasons} from "../../data/diversionReasons"
import _ from 'lodash';
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import * as subscriptions from "../../graphql/subscriptions"


import Widget from './components/Widget'
import WidgetWrapper from './components/WidgetWrapper'
import DiversionReason from './components/DiversionReason'
import Draggable from '../../components/Draggable'


export default function WidgetsPage() {

    const [selectedMachine, setSelectedMachine] = useState(null)
    const [widgets, setWidgets] = useState([])
    const [subWidget, setSubWidget] = useState({})

    useEffect(() => {
        getMachines()
        setupCreateMachineSubscription()
        setupUpdateMachineSubscription()

        // return () => {
        //   subscriptionOnCreateMachine.unsubscribe()
        //   subscriptionOnUpdateMachine.unsubscribe()
        // }
    }, [subWidget])


    let subscriptionOnCreateMachine
    function setupCreateMachineSubscription(){
        subscriptionOnCreateMachine = API.graphql(
        graphqlOperation(subscriptions.onCreateMachine)
        ).subscribe({
        next:(data) => {
            setSubWidget(data.value.data.onCreateMachine)
        },
        })
    }

    let subscriptionOnUpdateMachine
    function setupUpdateMachineSubscription(){
        subscriptionOnUpdateMachine = API.graphql(
        graphqlOperation(subscriptions.onUpdateMachine)
        ).subscribe({
        next:(data) => {
            setSubWidget(data.value.data.onUpdateMachine)
        },
        })
    }

    async function getMachines(){
        const machineList = await API.graphql({
            query: queries.listMachines,
        });
        setWidgets(machineList['data']["listMachines"]["items"])
    }

    async function updateMachine(machineEditData){
        await API.graphql(graphqlOperation(mutations.updateMachine, {input: machineEditData}))
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


    return (
        <div className="widget-section">
            <Draggable info={widgets} updateMachine={updateMachine}>
            <div className="grid fifth reason-buttons">
                {diversionReasons.map(diversion => <DiversionReason key={_.uniqueId()} reason={diversion} handleReasonClick={handleReasonClick}/>)}
            </div>

            <div className="test">
            <WidgetWrapper wrap={false}>
                {widgets.map(widget => {
                return(
                    <>
                        {(widget.ragOuter !== "green" || widget.ragInner !== "green") && (
                            <Widget 
                                key={_.uniqueId()}
                                selectedMachine={selectedMachine} 
                                setSelectedMachine={setSelectedMachine} 
                                machineName={widget.name} 
                                innerRAG={widget.ragOuter} 
                                outerRAG={widget.ragInner}
                                mcdown={widget.mcdown} 
                                currentdowntime={widget.currentdowntime} 
                                cumulativedowntime={widget.cumulativedowntime} />
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
