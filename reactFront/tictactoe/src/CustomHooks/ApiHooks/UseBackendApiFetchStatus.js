import {useState} from 'react'
import {actionStateEnum} from '../../Enums/actionStateEnum'


export default function UseBackendApiFetchStatus(){

    const [fetchStatus , setFetchStatus] = useState(actionStateEnum.NONE);

    async function invokeMethod(method){
        try{
            setFetchStatus(actionStateEnum.PENDING);
            const response = await method();
            if(response.ok === true){
                setFetchStatus(actionStateEnum.SUCCESS);
            }else{
                setFetchStatus(actionStateEnum.FAILED);
            }

            return response;
        }catch(err){
            setFetchStatus(actionStateEnum.ERROR);
            throw err;
        }
    }

    return [fetchStatus, invokeMethod]

}