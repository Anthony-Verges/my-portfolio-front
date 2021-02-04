import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Resume from "./CardResume";
import Portfolio from "./Portfolio";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/myportfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
