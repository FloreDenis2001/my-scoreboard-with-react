import React, { useEffect, useState } from 'react'
import Player from '../models/Player'
import State from './State';
import Stopwatch from './Stopwatch';


interface HeaderProps{

    players:Player[]
}


const Header:React.FC<HeaderProps>=({players})=>{


    let [score,setScore]=useState(0);
   
    useEffect(()=>{

        let sum=0;

        players.forEach(p=>{

            sum+=p.score;
        })


        setScore(sum);

        


    },[players]);

    
  return (
    <div className='head-scoreboard'>
      <State totalPlayers={players.length} totalScore={score} />
      <div className="title">
        <h3 className="title-scoreboard">SCOREBOARD</h3>
       </div> 
      <Stopwatch start={false} reset={false}/>
      </div>
  )
}

export default Header