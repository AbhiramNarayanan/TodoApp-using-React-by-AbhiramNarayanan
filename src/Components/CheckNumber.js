import React from 'react'

const CheckNumber = ({Number}) => {
    if(Number>0){
        return <h1>Positive</h1>
      }
      else if(Number<0){
        return <h1>Negative</h1>
      }
      else{
        return <h1>Zero</h1>
      }
  return (
    <div>
        
    </div>
  )
}

export default CheckNumber