// import * as queries from '../graphql/queries';
// import * as React from "react";
// import {useState, useEffect} from "react"
// import { API } from 'aws-amplify';

// export default function ListMachines(){

//     const [machines, setMachines] = useState([])

//     useEffect(() => {
//         updateList()
//     }, [])


//     async function updateList(){
//         const allMachines = await API.graphql({
//             query: queries.listMachines
//         });
//         setMachines(allMachines['data']['listMachines']['items'])
//     }


//     return(
//         <div>
//             <ul>
//                 {console.log(machines)}
//                 {machines.map(machine => <li key={machine.id}>{machine['id']}</li>)}
//             </ul>
//         </div>
//     )

// }

