import React from 'react'

const States = ({newStates}) => {
  return (
    <div>
        {newStates.map((state)=>
        (
            <div className="bg-danger text-white">
             <h1>State : {state.name}</h1>
             <h1>Language : {state.language}</h1>
             <h1>Population : {state.population}</h1>

            </div>

        ))}
    </div>
  )
}

export default States