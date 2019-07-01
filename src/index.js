import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { browserHistory } from "react-router";
import { HashRouter as Router, Route } from "react-router-dom";
import { loadActiveBooks } from "./actions/bookActions";
import MainContainer from "./containers/mainContainer";
import SearchContainer from "./containers/searchContainer";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

store.dispatch(loadActiveBooks());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={MainContainer} />
        <Route path="/search" component={SearchContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
