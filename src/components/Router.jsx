import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Resume from "./Resume.jsx";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/myportfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
