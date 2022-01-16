import {useState, useEffect} from 'react'
import {roomUserModel} from './../Models/roomUserModel'
import {allRoomUsersArePlayers} from './../Helpers/roomUserHelper'
import {getNextArrayElement} from './../Helpers/arrayHelper'

function parametersValidator(players){
    if(allRoomUsersArePlayers(players) === false){
        console.warn('Not all users are players !!! The UsePlayers hook should only contain players')
    }
}

export default function UsePlayers(
    players=[new roomUserModel()],
    currentPlayerWhoStarts=new roomUserModel()
){
    parametersValidator(players);
    
    const [currentPlayer, setCurrentPlayer] = useState(currentPlayerWhoStarts);

    function setNextCurrentPlayer(){
        const nextPlayer = getNextArrayElement(currentPlayer, players)
        setCurrentPlayer(nextPlayer)
    }

    return [currentPlayer, setNextCurrentPlayer]
}