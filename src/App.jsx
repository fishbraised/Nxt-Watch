import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
