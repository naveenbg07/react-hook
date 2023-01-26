import React, { memo} from "react";

// function MarkInfo(props){
//     return (
//         <div className="row">
//             <div className="col-md-12 text-center">
//                 <h3 className="display-3 text-danger">{props.marksInfo().result}</h3>
//             </div>
//         </div>
//     )
// }

const MarkInfo = memo(
    (props) =>(
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-4 text-danger">{props.marksInfo().result}</h3>
            </div>
        </div>
    )
)

export default MarkInfo;