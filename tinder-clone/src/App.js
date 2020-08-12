import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './Header';
import Tindercards from './Tindercards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Switch>
            <Route path="/chat">
              <h1>chat</h1>
            </Route>
            <Route path="/">
              <h1>I am home</h1>
              <Tindercards/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
