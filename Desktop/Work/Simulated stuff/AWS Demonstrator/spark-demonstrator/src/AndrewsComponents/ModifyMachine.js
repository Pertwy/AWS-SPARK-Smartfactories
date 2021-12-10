// import * as queries from '../graphql/queries';
// import * as mutations from '../graphql/mutations';
// import Moment from 'react-moment';

// import { API } from 'aws-amplify';
// import * as React from "react";

// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
// import {useEffect, useState} from "react"


// export default function ModifyMachine({id}){

//     const [machineState, setMachineState] = useState({
//         machine: null,
//         diversion: {
//             code: "Planned",
//             timeStart: null,
//             timeEnd: null
//         }
//     })

//     useEffect(() => {
//         updateMachine()
//             .catch((err) => {console.log("Error", err)})
//     },[])



//     async function updateMachine(){
//         // Simple query
//         const allMachines = await API.graphql({
//             query: queries.getMachine,
//             variables: {
//                 'id': id
//             }
//         })
        
//         ///console.log(allMachines.data.getMachine);

//         let mState = machineState
//         mState.machine = allMachines['data']['getMachine']

//         setMachineState(mState)
//     }


//     function handleSubmit(event){
//         event.preventDefault();
//         console.log(machineState.machine.setpoint);

//         API.graphql({
//             query: mutations.updateMachine,
//             variables: {
//                 input: {
//                     id,
//                     setpoint: machineState.machine.setpoint,
//                     _version: machineState.machine._version
//                 }
//             }
//         }).then((e) => {
//             console.log("Success", e);            
//             let mState = machineState
//             mState.machine = e.data.updateMachine
//             setMachineState(mState)
//         }).catch((err) => console.log("Error", err))
//     }

    
//     function handleDiversion(event){
//         event.preventDefault();
//         let diversion = machineState.diversion;
//         diversion.machineID = id;
//         console.log(diversion);

//         API.graphql({
//             query: mutations.createDiversion,
//             variables: {
//                 input: diversion
//             }
//         }).then((e) => {
//             console.log("Success", e);
//             updateMachine();
//         }).catch((err) => console.log("Error", err))
//     }


//     function deleteDiversion(diversion){
//         API.graphql({
//             query: mutations.deleteDiversion,
//             variables: {
//                 input: {
//                     id: diversion.id,
//                     _version: diversion._version
//                 }
//             }
//         }).then((e) => {
//             console.log("Success", e);
//             updateMachine();
//         }).catch((err) => console.log("Error", err))
//     }




//     return(
//         <>
//         {!machineState.machine && (
//             <></>
//         )}

//         {machineState.machine && (
//             <div className={"Box"}>
//             <p className={"Bold"}>ID</p><p>{machineState.machine.id}</p>
//             <p className={"Bold"}>Name</p><p>{machineState.machine.name}</p>
//             {/*<p className={"Bold"}>Description</p><p>{machine.description}</p>*/}
//             <p className={"Bold"}>Set Point</p><p>{machineState.machine.setpoint}</p>
//             <p className={"Bold"}>Diversions</p>
//             <table>
//                 <tr className={"align-left"}><th width={"150px"}>Type</th><th width={"150px"}>Start</th><th width={"150px"}>End</th><th>Delete</th></tr>
//                 {
//                     machineState.machine.diversions.items.map(
//                         diversion =>
//                             diversion._deleted ? "" :
//                             <tr key={diversion.id}>
//                                 <td>{diversion.code}</td>
//                                 <td><Moment fromNow>{diversion.timeStart}</Moment></td>
//                                 <td><Moment fromNow>{diversion.timeEnd}</Moment></td>
//                                 <td><a className={'red'} href={"#"} onClick={() => deleteDiversion(diversion)}>X</a></td>
//                             </tr>
//                     )
//                 }
//             </table>

//             <p className={"Bold"}>Change Setpoint</p>
//             <form onSubmit={handleSubmit}>
//                 <input type={"text"}
//                        className={"marg"}
//                        name={"setpoint"}
//                        value={machineState.machine.setpoint}
//                        onChange={event => {
//                            let mState = machineState;
//                             mState.machine.setpoint = event.target.value;
//                             setMachineState(mState)}
//                        }
//                         />
//                 <input type={"submit"}/>
//             </form>


//             <p className={"Bold"}>Add Diversion</p>
//             <form onSubmit={handleDiversion}>
//                 <DateTimePicker
//                     className={"marg"}
//                     onChange={value => {
//                             let mState = machineState;
//                             mState.diversion.timeStart = value;
//                             setMachineState(mState);
//                         }
//                     }
//                     value={machineState.diversion.timeStart}
//                 />


//                 <DateTimePicker
//                     className={"marg"}
//                     onChange={value => {
//                             let mState = machineState;
//                             mState.diversion.timeEnd = value;
//                             setMachineState(mState);
//                         }
//                     }
//                     value={machineState.diversion.timeEnd}
//                 />

//                 <select
//                     name={"setpoint"}
//                     className={"marg"}
//                     value={machineState.diversion.code}
//                     onChange={event => {
//                             let mState = machineState;
//                             mState.diversion.code = event.target.value;
//                             setMachineState(mState);
//                         }
//                     }
//                 >
//                     <option value="Planned">PLANNED</option>
//                     <option value="Unplanned">UNPLANNED</option>
//                     <option value="Maintenance">MAINTENANCE</option>
//                 </select>

//                 <input type={"submit"}/>
//             </form>

//         </div>
//         )}
        
//         </>
//     )
// }
