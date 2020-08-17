import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './Header';
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
          <Switch>
            <Route path="/chat">
              <h1>chat</h1>
            </Route>
            <Route path="/">
              <Tindercards/>
              <SwipeButtons/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
