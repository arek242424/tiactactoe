import Box from '@mui/material/Box'

import LogginPanel from './Components/UserLogging/LogginPanel'
import {useSelector} from 'react-redux'
import './App.scss'
import UserMainPanel from './Components/MainPanels/UserMainPanel'

function App() {

  const loggedUser = useSelector(state => state.appState.loggedUser)


 
  return (
    <Box>
      {loggedUser ?
        <UserMainPanel/>
        :
        <LogginPanel />
      }
    </Box>

  )
}

export default App;
