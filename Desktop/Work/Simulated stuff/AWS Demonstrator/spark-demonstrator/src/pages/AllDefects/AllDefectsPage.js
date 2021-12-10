import React, {useEffect, useState} from 'react'
import "./components/defects.css"
import Defect from './components/Defect'
import { defectImageData } from '../../data/mockDefectData'

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import * as subscriptions from '../../graphql/subscriptions';

export default function AllDefectsPage() {
    
    const [defects, setDefects] = useState([])
    const [subDefect, setSubDefect] = useState({})
    let newDefect = {
        image: "https://theloopywhisk.com/wp-content/uploads/2020/11/Gluten-Free-Seeded-Loaf_730px-featured.jpg",
        resolved: false,
        item: "Bread",
        subitem: "Gluton Free",
        location: "Oven line D",
    }


    useEffect(() => {
        getDefects()
    }, [subDefect])


    useEffect(() => {
        setupSubscription()

        return () => {
        subscriptionOnUpdateDefect.unsubscribe()
        }
    }, [])


    let subscriptionOnUpdateDefect

    function setupSubscription(){
        subscriptionOnUpdateDefect = API.graphql(
            graphqlOperation(subscriptions.onUpdateDefect)
            ).subscribe({
            next:(data) => {
                setSubDefect(data.value.data.onUpdateDefect)
            }
        })
    }


    async function createDefect(reason){
        await API.graphql(graphqlOperation(mutations.createDefect, {input: newDefect}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }


    async function getDefects(){
        const defectList = await API.graphql({
            query: queries.listDefects,
        });
        setDefects(defectList['data']["listDefects"]["items"])
    }

    return (
        <div className="grid fifth defect-image-wrapper">
            {defects.map(defect =><Defect data={defect}/>)}
            {/* <button onClick={()=>createDefect()}>Add defect</button> */}
        </div>
    )
}
