import React from 'react'

export default function DiversionReason({reason, handleReasonClick}) {
    return (
        <div className="diversion-reason" onClick={()=>handleReasonClick(reason)}>{reason}</div>
    )
}
