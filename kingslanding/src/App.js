import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./component/search/Search";

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  </Fragment>
);
export default App;
