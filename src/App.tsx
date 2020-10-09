import React from 'react';
import logo from './logo.svg';
import IndexPage from './components/indexpage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {HOME_PAGE, INDEX_PAGE} from './utils/urls';

function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route path={INDEX_PAGE} component={IndexPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
