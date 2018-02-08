import React from "react";
import Languages from "./Languages/Languages";
import Battle from './Battle'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
  <div>
    <Route exact path='/' component={Languages} />
    <Route path='/battle' component={Battle} />
  </div>
  </Router>
);
export default App;
