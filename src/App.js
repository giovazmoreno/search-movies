import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import {NotFound} from './pages/NotFound';


class App extends Component {


  render() {
    /* Ruteo forma imperativa */
    /* const url = new URL(document.location)
    const Page = url.searchParams.has('id')
      ? <Detail id={url.searchParams.get('id')} />
      : <Home /> */

    return (
      <div className="App">
        {/* Ruteo forma declarativa */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}

export default App;
