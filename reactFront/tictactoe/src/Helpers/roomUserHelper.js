import {roomUserRoleEnum} from './../Enums/roomUserRoleEnum'

export function isRoomUserPlayer(roomUser){
    return roomUser.userRoles.includes(roomUserRoleEnum.PLAYER);
}

export function allRoomUsersArePlayers(roomUsers=[]){
    return roomUsers.some(roomUser => roomUser.userRoles.includes(roomUserRoleEnum.PLAYER) === false);
}