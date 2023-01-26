import React, { useCallback, useState } from 'react'
import Age from '../screens/Age';
import Info from '../screens/Info';

//useCallback => returns the memorized callback response

function Ex6() {
        //sate
    const [age,setAge] = useState(25)
        //action method
    const handleClick =() =>{
        setAge(age+1)
    }
        //statement
    const rajusAge = `the age naveen is ${age}`;

        //callback hook
    const updateAge = useCallback(()=>{
        return rajusAge
    },[age])
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-2">useCallback</h3>
            </div>
        </div>

        <Age age={age} handleClick={handleClick}/>
        <Info updateAge={updateAge}/>
    </div>
  )
}

export default Ex6