import React, {useState, useLayoutEffect} from 'react'

function Ex4() {
    const [num, setNum] = useState(0)
    const [logs, setLogs] = useState([])

    useLayoutEffect(() => {
        setLogs(x => [...x, `effect has invoked ${num}`])
    },[num])

    function getNum(){
        setNum(Math.round(Math.random() * 1000))
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className='display-3'>UseLayoutEffect</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <h3 className='text-success text-center'>num = {num}</h3>

                <button onClick={getNum} className="btn btn-outline-success">Generate Number</button>
            </div>      
        </div>

        
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group">
                    {
                        logs.map((item,index) =>{
                            return(
                                <li className="list-group-item" key={index}>{item}</li>
                            )
                        })
                    }

                </ul>
            </div>      
        </div>  
    </div>
  )
}

export default Ex4
