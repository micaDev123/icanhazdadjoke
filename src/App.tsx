import React from 'react';
import IndexPage from './components/indexpage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {INDEX_PAGE} from './utils/urls';

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
