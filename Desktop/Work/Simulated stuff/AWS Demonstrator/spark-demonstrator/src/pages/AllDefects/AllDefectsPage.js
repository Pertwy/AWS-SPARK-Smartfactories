import React, {useEffect, useState} from 'react'
import "./components/defects.css"
import Defect from './components/Defect'

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../graphql/mutations"
import Modal from '../../components/Modal';

export default function AllDefectsPage({defects}) {
    
    const [listModal, setListModal] = useState(false)
    let newDefect = {
        image: "https://theloopywhisk.com/wp-content/uploads/2020/11/Gluten-Free-Seeded-Loaf_730px-featured.jpg",
        resolved: false,
        item: "Bread",
        subitem: "Gluton Free",
        location: "Oven line D",
    }


    async function createDefect(){
        await API.graphql(graphqlOperation(mutations.createDefect, {input: newDefect}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }

    function dateFormat(date){
        let newDate = new Date(date)
        return(newDate.toISOString().substring(0, 10))
    }


    function getSet(defects){
        let mySet = new Set()
        defects.forEach(defect => mySet.add(dateFormat(defect.createdAt)))
        let myArray = Array.from(mySet);
        return myArray
    }


    return (
        <div >
            {/* <button onClick={()=>console.log(getSet(defects))}>Test</button> */}
            {/* <button onClick={()=>createDefect()}>Create</button> */}
            {getSet(defects).map(date => {return(
                <>
                    <h3>{date}</h3>
                    <button onClick={()=>setListModal(true)}>Update All Defects</button>

                    <Modal modal={listModal}>
                        <div className="grid eighth defect-image-wrapper">
                            {defects.filter(defect => dateFormat(defect.createdAt) === date).map(defect =><Defect data={defect}/>)}
                            <button onClick={()=>setListModal(false)}>Close</button>
                        </div>
                    </Modal>

                    <div className="grid eighth defect-image-wrapper">
                        {defects.filter(defect => dateFormat(defect.createdAt) === date).map(defect =><Defect data={defect}/>)}
                    </div>
                </>)})}
        </div>
    )
}
