import React, { useEffect, useState } from 'react'
import Player from '../models/Player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faTrash } from '@fortawesome/free-solid-svg-icons'

interface PlayerProps{
    player:Player,
    changePoints:(id:number,score:number)=>void,
    deletePlayer:(player:Player)=>void
}

const PlayerComp:React.FC<PlayerProps>=({player,changePoints,deletePlayer})=>{


    const[isHovering,setIsHovering]=useState(false);
    const[iswinner,setWinner]=useState(false);
    
    const handleMouseOver=()=>{
        setIsHovering(true);
    }

    const handleMouseLeave=()=>{
        setTimeout(()=>{ setIsHovering(false);},1000)
       
    }

    function minusValidation(){
        if(player.score>0)
            changePoints(player.id,-1);
    }

    function addValidation(){
        if(player.score<10){
            changePoints(player.id,1);
            }
    }

 
    useEffect(()=>{
       if(player.score===10){
        setWinner(true);
       }else {
        setWinner(false);
       }

    },[player.score]);


  return (
    <div className="player id-1">
    <div className="player-details">

    {isHovering &&
    <FontAwesomeIcon className='trash-icon' onClick={()=>deletePlayer(player)} icon={faTrash}bounce />
    }

    {iswinner &&
    <FontAwesomeIcon className='crown-icon' onClick={()=>deletePlayer(player)} icon={faCrown}bounce />
    }
        <h3 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="name">{player.nume}</h3>
    </div>
  
        <div className="player-score">

            <div className="minus" onClick={minusValidation}>
               <p>-</p> 
            </div>

            <div className='scores'>
            <h3>{player.score}</h3>
            </div>
            <div className="plus" onClick={addValidation}>
                <p>+</p>
            </div>
        </div>
    </div>
  )
}

export default PlayerComp