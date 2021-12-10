import * as React from "react";

export default function GrafanaEmbed({source, panelId, width, height}){

    function getTime(now){
        if (now) {
            return Math.round(Date.now())
        } else {
            return getTime(true) -3000 * 1000
        }
    }

    return(
        <iframe 
            className={"BlockB"} 
            src={source + getTime(false) + "&to=" + getTime(true) + "&panelId=" + panelId}
            width={width} 
            height={height} 
            frameBorder="0">
        </iframe>
    )

}
