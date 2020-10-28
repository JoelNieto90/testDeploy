import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';
import AnimationLoader from './Pages/AnimationLoader';
import Album from './Pages/Album';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path='/' 
            component={AnimationLoader} 
          />
          <Route 
            exact 
            path='/home' 
            component={Home} 
          />
          <Route 
            exact 
            path='/album/:myId' 
            component={Album} 
          />
          <Route 
            exact 
            path='/signin' 
            component={SignIn} 
          />
          <Route 
            exact 
            path='/register' 
            component={Register} 
          />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
