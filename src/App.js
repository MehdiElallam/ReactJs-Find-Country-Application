import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header";
import Search from "./components/search";
import Detail from "./components/detail";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./App.css";
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="Find any Country" />
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/detail/:code" component={Detail} />
              <Route path="/user/:name/:age" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
