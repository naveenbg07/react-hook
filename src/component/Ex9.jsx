import React, {useState, useMemo} from 'react'
import MarkInfo from '../screens/MarkInfo'
import Marks from '../screens/Marks'

function Ex9() {
    const [mark, setMark]= useState(60)

    const incMark = () =>{
        setMark(mark+1)
    }

    const johnsMarks = useMemo(() => ({
        result:`johns scored ${mark}% as a final result.`
    }), [mark])

    const marksInfo = () =>{
        return johnsMarks
    }

    // useMemo = return memorized value interns of object
    //useCallback = return memorized callback function (returns single value)
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning">useMemo() hook</h3>
            </div>
        </div>

        <Marks mark={mark} incMark={incMark}/>
        <MarkInfo marksInfo={marksInfo}/>
    </div>
    
  )
}

export default Ex9