import React, {useReducer} from 'react'

//state
const initState = {num:0};

//reducer = state + action
const myReducer = (state,action) => {
    switch(action){
        case 'plus':
            return{num : Math.round(state.num+1)}

        case 'minus':
            if(state.num >= 0){
                return {num : state.num -1}
            } else {
                return{num : 0}
            }

        default:window.alert('sorry, not a valid action')
                break;
    
    }
}

function Ex5() {
    // state, action dispatcher = useReducer(reducer,initial state)
    const [state,dispatch] = useReducer(myReducer, initState)
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">UseReducer</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <button onClick={() => dispatch('plus')} className="btn btn-success">plus</button>
                <button onClick={() => dispatch('minus')} className="btn btn-danger float-end">minus</button>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <h1 className=" text-success display-1">state = {state.num}</h1>
            </div>
        </div>
    </div>
  )
}

export default Ex5