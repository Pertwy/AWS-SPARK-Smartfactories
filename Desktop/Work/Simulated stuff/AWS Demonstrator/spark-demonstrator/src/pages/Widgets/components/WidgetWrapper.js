import React from 'react'
import "./widget.css"

export default function WidgetWrapper({children, wrap}) {
    
    let isWrap = wrap ? "wrap" : ""
    
    return (
        <div className={`widget-wrapper ${isWrap}`}>
            {children}
        </div>
    )
}
