
import {ticTacToeEnum} from './../../Enums/ticTacToeEnum'

export function ticTacToeBoardFieldModel(id=-1, playerWhoClicked=undefined){
    this.id = id;
    this.playerWhoClicked=playerWhoClicked;    
}