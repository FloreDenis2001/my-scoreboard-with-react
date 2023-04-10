import React, { useState } from 'react'
import Player from '../models/Player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface PlayerProps{
    player:Player,
    changePoints:(id:number,score:number)=>void,
    deletePlayer:(player:Player)=>void
}

const PlayerComp:React.FC<PlayerProps>=({player,changePoints,deletePlayer})=>{


    const[isHovering,setIsHovering]=useState(false);
    
    const handleMouseOver=()=>{
        setIsHovering(true);
    }

    const handleMouseLeave=()=>{
        setTimeout(()=>{ setIsHovering(false);},1000)
       
    }


  return (
    <div className="player id-1">
    <div className="player-details">
    {isHovering &&
    <FontAwesomeIcon className='trash-icon' onClick={()=>deletePlayer(player)} icon={faTrash}bounce />
    }
        <h3 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="name">{player.nume}</h3>
    </div>
  
        <div className="player-score">

            <div className="minus" onClick={()=>{changePoints(player.id,-1)}}>
               <p>-</p> 
            </div>

            <div className='scores'>
            <h3>{player.score}</h3>
            </div>
            <div className="plus" onClick={()=>{changePoints(player.id,1)}}>
                <p>+</p>
            </div>
        </div>
    </div>
  )
}

export default PlayerComp