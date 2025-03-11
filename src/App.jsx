import Login from "./components/Login";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Gaming from "./components/Gaming";
import SavedVideos from "./components/SavedVideos";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/trending" component={Trending} />
      <Route exact path="/gaming" component={Gaming} />
      <Route exact path="/saved-videos" component={SavedVideos} />
    </Switch>
  </BrowserRouter>
);

export default App;
