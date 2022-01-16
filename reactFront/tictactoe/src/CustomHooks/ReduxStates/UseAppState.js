import {useDispatch} from 'react-redux'
import {userModel} from './../../Models/userModel'
import {actions} from './../../Reducers/mainStateReducer'
import {useSelector} from 'react-redux'

export default function UseAppState(){

    const dispatch = useDispatch()
    const userList = useSelector(state => state.appState.userList)

    function dispatchLoggedUser(user){
        if((user instanceof userModel) === false){
            throw 'User must be instance of userModel';
        }

        dispatch(actions.setLoggedUser({loggedUser: user}));
    }

    return {dispatchLoggedUser, userList}
}