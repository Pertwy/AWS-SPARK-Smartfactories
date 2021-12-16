import React, { useState } from 'react'
import { defectActions } from '../../../data/defectActions'
import SimpleUserDropDown from '../../../components/SimpleUserDropDown'
import GenericDropDown from '../../../components/GenericDropDown'
import "./defects.css"

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../../graphql/mutations"
import Modal from '../../../components/Modal'


export default function Defect({data}) {

    //Deconstructed the "data" prop
    const {id, image, item, location, resolved, subitem } = data

    const [singleModal, setSingleModal] = useState(false)
    const [action, setAction] = useState("")
    const [isBad, setIsBad] = useState(null)
    const [operatorAttended, setOperatorAttended] = useState("")

    let greyed = (resolved) ? "greyed" : ""


    async function handleSave(){
        updateDefect().then(setSingleModal(false) )
    }


    async function updateDefect(){
        await API.graphql(graphqlOperation(mutations.updateDefect, {input: {id:id, resolved:true, operatorAttended:operatorAttended, bad:isBad, action:action}}))
            .then(res => console.log(res))
            .catch((err) => console.error(err))
    }

    function handleSetAction(e){
        setAction(e.target.value)
    }



    return (
        <div className="image-grid">


            <img className={`image-list ${greyed}`} onClick={()=>setSingleModal(true)} src={image}></img>


            <Modal modal={singleModal}>

                <div className="defects-wrapper">
                    <div className="row top-wrapper">


                        <div className="defect-image">
                            <img  src={image}></img>
                        </div>


                        <div className="feedback-wrapper">
                            <div className="good-bad">

                                <p>Is this product bad or good?</p>
                                  <input type="radio" id="good" name="isBad" value="good" onChange={(e)=>{setIsBad(e.target.value)}}/>
                                  <label for="good">Good</label>
                                  <input type="radio" id="bad" name="isBad" value="bad" onChange={(e)=>{setIsBad(e.target.value)}}/>
                                  <label for="bad">Bad</label>

                                <br></br>
                                <br></br>
                                
                                <p>Operator evaluating defect</p>
                                <SimpleUserDropDown user={operatorAttended} setUser={setOperatorAttended}/>

                                <br></br>
                                <br></br>
                                
                                <p>What action has been taken concerning this defect?</p>
                                <GenericDropDown name="actionTaken" data={defectActions} def="Action Taken" info={action} setInfo={handleSetAction} />
                                

                                <br></br>
                                <br></br>

                                <button onClick={()=>handleSave()}>Save</button>

                            </div>
                        </div>
                    </div>


                    <div className="bot-wrapper">
                        <p>Bad {subitem} {item} detected at {location}</p>
                    </div>
                    

                </div>


                <button type="button" onClick={()=>setSingleModal(false)}>
                    Close
                </button>


            </Modal>
       
        </div>
    )
}
