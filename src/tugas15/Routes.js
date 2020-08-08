import React from "react";
import { Switch, Link, Route } from "react-router-dom";

// import Buah from '../tugas11/Tugas11';
import Timer from '../tugas12/Tugas12';
import Buah2 from '../tugas13/Tugas13';
import Lists from '../tugas14/Tugas14';
import Buah from '../tugas15/Buah';

const Routes = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/lists">Lists dengan class</Link>
          </li>
          <li>
            <Link to="/simple-hooks">Simple Hooks</Link>
          </li>
          <li>
            <Link to="/buah">Buah dengan context</Link>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route path="/timer" component={Timer}/>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/simple-hooks">
          <Buah2/>
        </Route>
        <Route path="/buah">
          <Buah/>
        </Route>
        <Route path="/">
          <Buah/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
