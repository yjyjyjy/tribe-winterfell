import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./component/search/Search";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./component/layout/Landing";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        {/* Navbar here */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Route exact path="/search" component={Search} />
          </section>
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);
export default App;
