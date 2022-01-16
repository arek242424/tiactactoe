import {useDispatch} from 'react-redux'
import {getUserList} from './../../ApiControllers/userController'
import UseBackendApiFetchStatus from './UseBackendApiFetchStatus'
import {actions} from './../../Reducers/mainStateReducer'

export default function UseUserList(){

    const dispatch = useDispatch(); 
    const [fetchUserListStatus, invokeAsyncMethod] = UseBackendApiFetchStatus();   

    async function fetchUserList(){        
        try{
            const response = await invokeAsyncMethod(getUserList);
            const body = await response.json();
            if(response.ok === true){
                dispatch(actions.setUserList({userList: body.data}))
            }
            return body.message;            
        }catch(err){
            console.trace(err);
            return 'Error while downloading users'
        }        
    }

    return [fetchUserListStatus, fetchUserList]
}

