import React, {useState} from 'react'
import _ from 'lodash';
import { sortString } from '../../components/utilityFuncs';

import Widget from '../Widgets/components/Widget'
import WidgetWrapper from '../Widgets/components/WidgetWrapper'


export default function AllMachinesPage({machines}) {

  const [selectedMachine, setSelectedMachine] = useState(null)
  
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
