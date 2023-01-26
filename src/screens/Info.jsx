import React, {memo} from 'react'

// function Info(){
//     return (
//         <div>Info</div>
//     )
// }

// memorized component
const Info = memo((props) => {
  return (
    <div className="row">
    <div className="col-md-12 text-center">
        <h1 className="text-warning display-1">Info</h1>
        <h2 className='text-center'>{props.updateAge()}</h2>
    </div>
    </div>
  )

})

export default Info