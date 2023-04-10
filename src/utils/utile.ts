import Player from "../models/Player";


export function generateId(players:Player[]):Number{


    let id=Math.floor(Math.random()*1000000+10000);



    while(findPlayerById(players,id)){

        id=Math.floor(Math.random()*1000000+10000);

    }

       
    return id;
}


export  function findPlayerById(players:Player[],id:number):boolean{


    return players.filter(e=>e.id===id).length>0;

}

export function findPlayerByName(players:Player[],name:String):boolean{
    return players.filter(e=>e.nume.toLocaleLowerCase()===name.toLocaleLowerCase()).length>0;
}
