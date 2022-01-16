import {useState, useMemo} from 'react'
import {ticTacToeBoardModel} from './../Models/TicTacToe/ticTacToeBoardModel'
import {ticTacToeGameRulesModel} from './../Models/TicTacToe/ticTacToeGameRulesModel'
import {checkIfSomeoneWins} from './../Helpers/ticTacToeGameHelper'


export default function UseTicTacToeGameOver(
    boardModel=new ticTacToeBoardModel(),
    rules=new ticTacToeGameRulesModel()
){

    const [winner, setWinner] = useState(undefined)

    useMemo(()=>{
        const winnerTemp = checkIfSomeoneWins(rules.signsCountToWin, boardModel.boardModel)
        setWinner(winnerTemp)
    }, [boardModel])



    return [winner]
}