import React from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import _ from "lodash"
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import * as subscriptions from "../../graphql/subscriptions"

export default function DiversionsPage() {
    
    const [diversions, setDiversions] = useState({})

    async function getDiversions(){
        const diversionList = await API.graphql({
            query: queries.listDiversions,
        });
        setDiversions(diversionList['data']["listDiversions"]["items"])
    }
    
    return (
        <div>
            <table >
                <tr>
                    <th>Machine</th>
                    <th>Reason</th>
                    <th>Created</th>
                </tr>
                
                {diversions.map((diversion) => {
                    return(
                    <tr key={_.uniqueId}>
                        <td>{diversion.machineName}</td>
                        <td>{diversion.reason}</td>
                        <td>{diversion.createdAt}</td>
                    </tr>
                    )
                })}
            </table>
            
        </div>
    )
}
