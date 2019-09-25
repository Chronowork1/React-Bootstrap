import React from 'react';
import './App.css';
//importing browser router from router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/*Set router back home*/}
          <Route exact path = "/" component={Home} />
          {/*Set to about page*/}
          <Route exact path = "/about" component={About} />
          {/*Set to news page*/}
          <Route exact path = "/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
