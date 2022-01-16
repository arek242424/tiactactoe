import {ticTacToeEnum} from './../Enums/ticTacToeEnum'
import {roomUserRoleEnum} from '../Enums/roomUserRoleEnum'


export function roomUserModel(        
    login="", 
    userRoles=[roomUserRoleEnum.PLAYER] ,
    ticTacToeSign=ticTacToeEnum.NONE){
    
        this.login = login;
        this.userRoles=userRoles;
        this.ticTacToeSign = ticTacToeSign;
}