import React, { useState } from 'react'
import { defectActions } from '../../../data/defectActions'
import SimpleUserDropDown from '../../../components/SimpleUserDropDown'
import UserDropDown from '../../../components/UserDropDown'
import "./defects.css"
import GenericDropDown from '../../../components/GenericDropDown'

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations"


export default function Defect({data}) {

    const {id, image, item, location, resolved, subitem } = data

    const [modal, setModal] = useState(false)
    const [user, setUser] = useState("")
    const [action, setAction] = useState("")

    let greyed = (resolved) ? "greyed" : ""

    async function handleSave(){
        updateDefect().then(setModal(false) )
    }


    let updateDefectData = {
        id:id,
        resolved: true
        //operatorAttended
        //bad
        //action
    }


    async function updateDefect(reason){
        await API.graphql(graphqlOperation(mutations.updateDefect, {input: updateDefectData}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }

    // function updateBad(e){
    //     e.preventDefault();
    //     if(e.target.value === "bad"){
    //         updateDefectData["bad"]=(false)
    //     } 
    //     if(e.target.value === "good"){
    //         updateDefectData["good"]=(false)
    //     }
        
    // }


    return (
        <div className="image-grid">


            
            <img className={`image-list ${greyed}`} onClick={()=>setModal(true)} src={image}></img>
            {/* <button onClick={()=>console.log(data)}>Test</button> */}


            {modal && (
                <div className={modal ? "modal display-block" : "modal display-none"}>
                    
                    <section className="modal-main">


                        <div className="defects-wrapper">
                            <div className="row top-wrapper">


                                <div className="defect-image">
                                    <img  src={image}></img>
                                </div>


                                <div className="feedback-wrapper">
                                    <div className="good-bad">
                                        <form action="">
                                            <p>Is this product bad or good?</p>
                                              <input type="radio" id="good" name="good-bad" value="good"/>
                                              <label for="good">Good</label>
                                              <input type="radio" id="bad" name="good-bad" value="bad" />
                                              <label for="bad">Bad</label>

                                            <br></br>
                                            <br></br>
                                            
                                            <p>Operator evaluating defect</p>
                                            <SimpleUserDropDown user={user} setUser={setUser}/>

                                            <br></br>
                                            <br></br>
                                            
                                            <p>What action has been taken concerning this defect?</p>
                                            <GenericDropDown data={defectActions} def="Action Taken" info={action} setInfo={setAction} />
                                           

                                            <br></br>
                                            <br></br>

                                            <button onClick={()=>handleSave()}>Save</button>
                                            <button onClick={()=>console.log(updateDefectData)}>test</button>
                                            
                                          
                                        </form>

                                    </div>
                                </div>
                            </div>


                            <div className="bot-wrapper">
                                <p>Bad {subitem} {item} detected at {location}</p>
                            </div>
                            

                        </div>


                        <button type="button" onClick={()=>setModal(false)}>
                            Close
                        </button>


                    </section>
                </div>
            )}

        </div>
    )
}
