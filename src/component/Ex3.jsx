import React,{useEffect, useState}from "react";


function Ex3(props){
    const [count,setCount]= useState(0)

    const incCount = () =>{
        setCount(count +1)

    }

    

    useEffect(()=>{
        console.log("one count updated")

        //unmount stage
        return()=>{
            //setCount()
        }
    }, [count])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">Ex3</h3>
                    
                </div>
                </div>

                <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success">Count = {count}</h1>
                    <button onClick={incCount} className="btn btn-outline-primary">Add Count</button>
                    
                </div>
            </div>
            </div>
        
    )
}
export default Ex3