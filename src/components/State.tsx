import React from 'react'

interface StateProps{

    totalPlayers:number,
    totalScore:number
}


const State:React.FC<StateProps>=({totalPlayers,totalScore})=> {
 
 
    return (
    <div className="info">
            <p>Players :{totalPlayers}</p>
            <p>Total Points : {totalScore}</p>
    </div>
  )
}

export default State