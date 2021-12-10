// import * as queries from '../graphql/queries';
// import { API } from 'aws-amplify';
// import * as React from "react";

// import {useState, useEffect} from "react"

// export default function DisplayMachine(){

    
//     const [machine, setMachine] = useState(null)


//     useEffect(() => {
//         updateMachine().catch((err) => {
//             console.log("Error", err);
//         });
//     }, [])


//     async function updateMachine(){
//         const allMachines = await API.graphql({
//             query: queries.getMachine,
//             variables: {
//                 'id': this.props.id
//             }
//         });
//         setMachine(allMachines['data']['getMachine'])
//     }


//     return(
//         <>
//             {(!machine) && (<div></div>)}

//             {machine && (
//                 <div>
//                     <p className={"Bold"}>ID:</p><p>{machine.id}</p>
//                     <p className={"Bold"}>Name:</p><p>{machine.name}</p>
//                     <p className={"Bold"}>Description:</p><p>{machine.description}</p>
//                     <p className={"Bold"}>Set Point:</p><p>{machine.setpoint}</p>
//                     <p className={"Bold"}>Diversions:</p>
//                     <ul>
//                         {
//                             machine.diversions.items.map(
//                                 diversion =>
//                                     <li key={diversion.id}>{diversion.code} | {diversion.timeStart} => {diversion.timeEnd}</li>
//                             )
//                         }
//                     </ul>
//                 </div>
//             )}
//         </>
//     )

// }
