import React, { useState } from "react";
import Player from "../models/Player";
import Header from "./Header";
import PlayerComp from "../components/PlayerComp";
import NewPlayer from "./NewPlayer";
import {generateId,findPlayerByName} from "../utils/utile"

function Home() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      nume: "Flore",
      score: 0,
    },

    {
      id: 2,
      nume: "Bogdan",
      score: 0,
    },

    {
      id: 3,
      nume: "Marian",
      score: 2,
    },

    {
      id: 4,
      nume: "Maria",
      score: 0,
    },

    {
      id: 5,
      nume: "George",
      score: 0,
    },
  ]);



  

function addPlayer(nume:String){
    let auxPlayers = [...players];
    let newplayer={
        id: generateId(players),
        nume:nume,
        score:0
    } as Player;

    if(!findPlayerByName(players,nume)){

        auxPlayers.push(newplayer);

        setPlayers(auxPlayers);

    }
   

    console.log(players);
    
}

function removePlayer(playerRemoved:Player){

    console.log("aici");
    console.log(playerRemoved);
    let auxPlayers=[...players];
    auxPlayers= auxPlayers.filter((player)=>player.id!==playerRemoved.id)
    setPlayers(auxPlayers);

}

function handlePoints(id: number, addToScore: number) {
    let auxPlayers = [...players];
    let aux =    auxPlayers.filter((player)=>player.id===id)
    aux[0].score+=addToScore;
    setPlayers(auxPlayers);
}


  return (
    <div className="scoreboard">
      <Header players={players}></Header>

      <div className="players-scoreboard">

       {
        players.map(player=>{
            return  <PlayerComp player={player} changePoints={handlePoints} deletePlayer={removePlayer}></PlayerComp>
        })
       }
      </div>

      <NewPlayer changeListOfPlayers={addPlayer}/>
    </div>
  );
}

export default Home;
