import React from "react";

function square(props){
    return(
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
    )
}

export default square;