import React,{useState} from "react";

function Ex1(props){
    // const [state,handler]= useState(init value)
    const [num, setNum] = useState(0);

    const incValue = (x) => {
        setNum(num + x)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">UseState Hook</h3>
                </div>

                <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center text-success">Num = {num}</h1>
                    <button onClick={()=> setNum(num+1)} className = "btn btn-success float-start">Add +1</button>

                    <button onClick={()=> incValue(25)} className = "btn btn-outline-primary float-end">Add +25</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Ex1