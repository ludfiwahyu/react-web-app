import logo from './logo.svg';
import './App.css';
import { Typography , AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Option from './components/Option';
import Notification from './components/Notification';

const useStyle = makeStyles ((theme) => ({
  
}))

function App() {
  return (
    <div className="App">
      <AppBar position='static' color='inherit'>
        <Typography variant="h4" align='center'>Video Chat HackMedical</Typography>
        <VideoPlayer />
        <Option>
          <Notification />
        </Option>
      </AppBar>
    </div>
  );
}

export default App;
