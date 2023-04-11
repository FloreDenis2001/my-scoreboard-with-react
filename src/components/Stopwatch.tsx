import React from 'react'
interface StopWatchProps{
  start:boolean,
  reset:boolean
}
const Stopwatch:React.FC<StopWatchProps>=({start,reset})=> {
  return (
    <div className="stopwatch">
           <p className="title-stopwatch">STOPWATCH</p> 
           <p className="timer">0</p>
           <div className="btn-stopwatch">
                <button className="btn-s start" onClick={()=>{start=true}}>START</button>
                <button className="btn-s reset" onClick={()=>{reset=true}}>RESET</button>
            </div>
    </div>
  )
}

export default Stopwatch