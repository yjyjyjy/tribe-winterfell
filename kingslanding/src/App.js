import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./component/search/Search";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </Fragment>
  </Provider>
);
export default App;
