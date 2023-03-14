import React from "react";
export default function Alert(props){
    const capital=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
return(
     props.alert && <div className={`alert alert-${props.alert.state} text-${props.mode==='dark'?'dark':'dark'}`} role="alert">
        <strong>{capital(props.alert.state)}</strong> {props.alert.message} 
        </div>
);

}