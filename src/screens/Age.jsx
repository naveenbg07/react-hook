import React from "react";

function Age(props){
    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-success display-1">Age = {props.age}</h1>
                <button onClick={props.handleClick} className="btn btn-success">Increment Age</button> 
            </div>
        </div>
    )
}
export default Age