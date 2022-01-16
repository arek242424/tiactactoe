import {makePostRequest, makeGetRequest} from './baseController'
import {userModel} from './../Models/userModel'

const controllerName = 'User';



export async function addUser(user=new userModel()){
    const response = await makePostRequest(controllerName, 'AddUser', user)
    return response;
}

export async function getUserList(){
    const response = await makeGetRequest(controllerName, 'GetUserList');
    return response;
}