import React, {useEffect, useState} from 'react'
import "./components/defects.css"
import Defect from './components/Defect'

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import * as subscriptions from '../../graphql/subscriptions';

export default function AllDefectsPage({defects}) {
    
    let newDefect = {
        image: "https://theloopywhisk.com/wp-content/uploads/2020/11/Gluten-Free-Seeded-Loaf_730px-featured.jpg",
        resolved: false,
        item: "Bread",
        subitem: "Gluton Free",
        location: "Oven line D",
    }


    async function createDefect(reason){
        await API.graphql(graphqlOperation(mutations.createDefect, {input: newDefect}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }


    return (
        <div className="grid fifth defect-image-wrapper">
            {defects.map(defect =><Defect data={defect}/>)}
        </div>
    )
}
