import React from 'react'

function Stopwatch() {
  return (
    <div className="stopwatch">
           <p className="title-stopwatch">STOPWATCH</p> 
           <p className="timer">0</p>
           <div className="btn-stopwatch">
                <button className="btn-s start">START</button>
                <button className="btn-s reset">RESET</button>
            </div>

    </div>
  )
}

export default Stopwatch