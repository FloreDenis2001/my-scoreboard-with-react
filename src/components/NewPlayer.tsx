import React, { useEffect, useState } from 'react'
import Player from '../models/Player'

interface NewPlayerProps{
    changeListOfPlayers:(nume:String)=>void
}



const NewPlayer:React.FC<NewPlayerProps>=({changeListOfPlayers})=> {


    const [name,setName]=useState("");

   

  return (
    <div className="add-section-player">
    <input type="text" className="new-player" placeholder="ENTER A PLAYER NAME" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <button className="add" onClick={()=>{changeListOfPlayers(name)}}>ADD PLAYER</button>
    </div>
  )
}

export default NewPlayer