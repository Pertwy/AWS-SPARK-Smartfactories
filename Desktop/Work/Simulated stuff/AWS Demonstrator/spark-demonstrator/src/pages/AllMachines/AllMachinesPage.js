import React, {useState, useEffect} from 'react'
import _ from 'lodash';
// import { widgets } from '../../data/mockWidgets'
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import * as subscriptions from '../../graphql/subscriptions';

import Widget from '../Widgets/components/Widget'
import WidgetWrapper from '../Widgets/components/WidgetWrapper'


export default function AllMachinesPage() {

  const [selectedMachine, setSelectedMachine] = useState(null)
  const [machineList, setMachineList] = useState([])
  const [subMachine, setSubMachine] = useState({})
  const [widgets, setWidgets] = useState([])

  let newMachineDetails = {
    name: "Dough Mixer #3", 
    ragInner: "red", 
    ragOuter: "amber", 
    description: "Proof", 
    operators: "James",
    mcdown: "MC Down",
    currentdowntime: 0,
    cumulativedowntime: 0
  }
  
  

  useEffect(() => {
    getMachines()
  }, [subMachine])


  useEffect(() => {
    setupSubscription()

    // return () => {
    //   subscriptionOnCreateMachine.unsubscribe()
    // }
  }, [])


  async function getMachines(){
    const machineList = await API.graphql({
        query: queries.listMachines,
    });
    setWidgets(machineList['data']["listMachines"]["items"])
  }


  async function createMachine(){
    await API.graphql(graphqlOperation(mutations.createMachine, {input: newMachineDetails}))
    .then(res => console.log(res))
    .catch((err) => console.error(err))
  }

  


  let subscriptionOnCreateMachine

  function setupSubscription(){
    subscriptionOnCreateMachine = API.graphql(
      graphqlOperation(subscriptions.onCreateMachine)
    ).subscribe({
      next:(data) => {
        setSubMachine(data.value.data.onCreateMachine)
        console.log("test")
      },
      // error: err => {
      //       console.log('subscription error', err.message);
      //     },
      // complete: () => {
      //   console.log('finished');
      // },
    })
  }


    return (
         <>
          
          
          <WidgetWrapper wrap={true}>
            {widgets.map(widget => {
              return(
                <>
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
                </>
              )
            })}
          </WidgetWrapper>

          {/* <h3>This will show all machines, as opposed to the falty ones which will be seen on the Widgets page</h3>
          <h4>Could have functionality whereby you click the machine and see its current status/graphana data</h4> */}

          {machineList.map(machine =>{
            return(
              <p>{machine.name} {machine.operators}</p>
            )
          })}

          {/* <h3>Click to see graphana</h3> */}
          <button onClick={()=>console.log(machineList)}>Test</button>
          <button onClick={()=>createMachine()}>Add Machine</button>
        </>
    )
}
