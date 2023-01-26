import React from "react";
import { NavLink } from "react-router-dom";

function Pnf(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Requested path Not found</h3>
                    <NavLink to={`/`} className= "btn btn-outline-primary">Back to Home</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Pnf