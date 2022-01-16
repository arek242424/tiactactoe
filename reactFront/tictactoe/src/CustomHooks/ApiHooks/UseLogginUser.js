import {addUser} from '../../ApiControllers/userController'
import {userModel} from '../../Models/userModel'
import {requestResultEnum} from './../../Enums/requestResultEnum'
import UseBackendApiFetchStatus from './UseBackendApiFetchStatus'

export default function UseLogginUser(){

    const [fetchStatus, invokeAsyncMethod] = UseBackendApiFetchStatus()

    async function addNewUser(user=new userModel()){        
        let requestResult;
        try{            
            requestResult = requestResultEnum.NOT_OK
            const response = await invokeAsyncMethod( () => addUser(user));
            const body = await response.json();
            if(response.ok === true){
                requestResult = requestResultEnum.OK
            }                      
            return [requestResult, body];
        }catch(err){
            console.trace(err);
            requestResult = requestResultEnum.INTERNAL_ERROR
            return [requestResult, undefined]
        }
    }

   return [fetchStatus, addNewUser];
}

