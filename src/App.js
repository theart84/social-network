import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {   
  return (    
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/news' component={News}/>
          <Route path='/friends' render={() => <Friends />}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>    
  );
}


export default App;