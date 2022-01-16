import {useState, useMemo} from 'react';
import {createTicTacToeBoardFieldsModel} from './../Helpers/ticTacToeGameHelper'
import {ticTacToeBoardModel} from './../Models/TicTacToe/ticTacToeBoardModel'

export default function UseTicTacToeGameBoard(boardSize=3){

    const [boardModel, setBoardModel] = useState(new ticTacToeBoardModel());
    useMemo(()=>{
        const boardModels = createTicTacToeBoardFieldsModel(boardSize)
        const boardModelTemp = new ticTacToeBoardModel(boardModels)
        setBoardModel(boardModelTemp)
    }, [boardSize])
    


    return [boardModel, setBoardModel];

}