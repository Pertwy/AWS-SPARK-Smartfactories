import React, {useState} from 'react'
import _ from 'lodash';

import Widget from '../Widgets/components/Widget'
import WidgetWrapper from '../Widgets/components/WidgetWrapper'


export default function AllMachinesPage({machines}) {

  const [selectedMachine, setSelectedMachine] = useState(null)
  
  
  function dateFormat(date){
    let newDate = new Date(date)
    return(newDate.toISOString().substring(0, 19).replace("T", " "))
  }

  function sortString(a, b) {
    let nameA = dateFormat(a); // ignore upper and lowercase
    let nameB = dateFormat(b); // ignore upper and lowercase
    if (nameA < nameB) {
        return +1;
    }
    if (nameA > nameB) {
        return -1;
    }
    return 0;
  }


  return (
    <>
    
      <WidgetWrapper wrap={true}>
        {machines.sort((a, b) => sortString(a.createdAt, b.createdAt)).map(({name, ragOuter, ragInner, mcdown, currentdowntime, cumulativedowntime}) => {
          return(
            <>
              <Widget 
                key={_.uniqueId()}
                selectedMachine={selectedMachine} 
                setSelectedMachine={setSelectedMachine} 
                machineName={name} 
                innerRAG={ragOuter} 
                outerRAG={ragInner}
                mcdown={mcdown} 
                currentdowntime={currentdowntime} 
                cumulativedowntime={cumulativedowntime} />
            </>
          )
        })}
      </WidgetWrapper>

    </>
  )
}
