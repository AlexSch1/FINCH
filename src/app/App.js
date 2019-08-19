import React from 'react';

import { Route } from 'react-router-dom';
import Game from './Game';
import Result from './Result';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Game} />
      <Route exact path="/result" component={Result} />
    </div>
  );
}

export default App;