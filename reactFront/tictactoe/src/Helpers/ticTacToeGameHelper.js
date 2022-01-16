import {ticTacToeEnum} from '../Enums/ticTacToeEnum'
import {ticTacToeBoardFieldModel} from './../Models/TicTacToe/ticTacToeBoardFieldModel'
import {deepEqual} from './objectHelper'

const minBoardSize=3
const startFieldId = 0


const directionEnum ={    
    RIGHT: 1,
    DOWN: 2,
    RIGHT_DOWN: 3,
    LEF_DOWN: 4

}

export function createTicTacToeBoardFieldsModel(boardSize=minBoardSize){
    let boardFieldsModels = []
    let fieldId = startFieldId
    if(boardSize && boardSize >= minBoardSize){
        for(let raw = 0; raw < boardSize; raw++){
            let newRaw = []
            for(let column = 0; column < boardSize; column++){                
                newRaw.push(new ticTacToeBoardFieldModel(fieldId, undefined))
                fieldId++
            }
            boardFieldsModels.push(newRaw)
        }
        return boardFieldsModels;
    }
    else{
        throw 'Board size can not be empty and lesser than 3';
    }
}

export function checkIfSomeoneWins(signsCountToWin=3, boardFields=[[new ticTacToeBoardFieldModel()],[]]){
    if(boardFields === undefined){
        console.log('boardField cannot be empty')
        return undefined;
    }

    const signsCountToWinAccStartValue = 1;
    const length = boardFields[0].length;

    for(let raw = 0; raw < length; raw++){
        for(let column = 0; column < length; column++){
            if(boardFields[raw][column].playerWhoClicked === undefined){
                continue;
            }

            let winner = checkDirection(boardFields[raw][column], directionEnum.RIGHT,signsCountToWin, signsCountToWinAccStartValue, boardFields)
            if(winner !== undefined){
                return winner
            }
            winner = checkDirection(boardFields[raw][column], directionEnum.RIGHT_DOWN,signsCountToWin, signsCountToWinAccStartValue, boardFields)
            if(winner !== undefined){
                return winner
            }
            winner = checkDirection(boardFields[raw][column], directionEnum.DOWN,signsCountToWin, signsCountToWinAccStartValue, boardFields)
            if(winner !== undefined){
                return winner
            }
            winner = checkDirection(boardFields[raw][column], directionEnum.LEF_DOWN,signsCountToWin, signsCountToWinAccStartValue, boardFields)
            if(winner !== undefined){
                return winner
            }
        }
    }

    return undefined;
}



function checkDirection(
    currentField = new ticTacToeBoardFieldModel(), 
    direction = directionEnum.RIGHT, 
    signsCount = 3,
    signsCountAcc = 0,
    boardFields=[[new ticTacToeBoardFieldModel()],[]]
){
    let playerWhoClickedCurrentField = currentField.playerWhoClicked;
    let nextField;
    if(signsCount === signsCountAcc){
        return playerWhoClickedCurrentField;
    }
    nextField = getField(boardFields, currentField, direction)
    if(nextField === undefined){
        return undefined
    }
    if(deepEqual(nextField.playerWhoClicked, playerWhoClickedCurrentField)){
        return checkDirection(nextField, 
            direction,
            signsCount,
            signsCountAcc + 1,
            boardFields)
    }else{
        return undefined;
    }


}


function getField(
    boardFields=[[new ticTacToeBoardFieldModel()],[]], 
    currentField=new ticTacToeBoardFieldModel(), 
    direction=directionEnum.NEXT
){
    let nextField;
    const rawLength = boardFields[0].length;

    const fieldId = getNextFieldId(direction,rawLength, currentField.id);
    if(fieldId === undefined){
        nextField = undefined;
    }else{
        const rawId = getRawOfField(rawLength,fieldId)
        nextField = boardFields[rawId].find(field => field.id === fieldId)
    }

    return nextField;
}


function areFieldsInTheSameRaw(rawLength, firstFieldId, secondFieldId){
    return getRawOfField(rawLength, firstFieldId) === getRawOfField(rawLength, secondFieldId);
}


/** raw starts from 0 number */
function getRawOfField(rawLength, currentFieldId){
    const raw = currentFieldId / rawLength
    return Math.floor(raw);
}

function getNextFieldId(direction, rawLength, currentFieldId){
    const maxFieldId = rawLength * rawLength -1;

    let fieldId = undefined

    if(maxFieldId === currentFieldId){
        return fieldId;
    }

    switch(direction){
        case directionEnum.RIGHT:            
            if(!areFieldsInTheSameRaw(rawLength, currentFieldId + 1, currentFieldId)){
                fieldId = undefined;
            }else{
                fieldId = currentFieldId + 1
            }           
            break;
        case directionEnum.RIGHT_DOWN:
            let nextRightDownFieldId = currentFieldId + rawLength + 1
            if(nextRightDownFieldId > maxFieldId || nextRightDownFieldId === getRawOfField(rawLength + 1, nextRightDownFieldId) * rawLength){
                fieldId = undefined;
            }else{
                fieldId = nextRightDownFieldId
            }
            break;
        case directionEnum.DOWN:
            let nextDownFieldId = currentFieldId + rawLength
            if(nextDownFieldId > maxFieldId){
                fieldId = undefined;
            }else{
                fieldId = nextDownFieldId
            }
            break;    
        case directionEnum.LEF_DOWN:
            let nextLeftDownFieldId = currentFieldId + rawLength - 1
            if(nextLeftDownFieldId > maxFieldId || areFieldsInTheSameRaw(rawLength, currentFieldId, nextLeftDownFieldId)){
                fieldId = undefined;
            }else{
                fieldId = nextLeftDownFieldId
            }
            break;
        default: 
            fieldId = undefined;
            break;
    }
    return fieldId;
}