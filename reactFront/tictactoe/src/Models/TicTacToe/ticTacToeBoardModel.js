import {ticTacToeBoardFieldModel} from './ticTacToeBoardFieldModel'

export function ticTacToeBoardModel(boardModel=[[new ticTacToeBoardFieldModel()],[]]){
    this.boardModel = boardModel;
}