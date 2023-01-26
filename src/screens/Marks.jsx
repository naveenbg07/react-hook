import React from "react";

function Marks(props){
    return (
        <div className="row">
            <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="text-success display-4">Marks = {props.mark}</h1>
                <button onClick={props.incMark} className="btn btn-outline-success">Increment Mark</button> 
            </div>
        </div>
    </div>
    )
}
export default Marks