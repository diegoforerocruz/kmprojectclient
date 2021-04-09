import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";
import ListInvestigators from './components/listInvestigators';
import ListInvGroups from './components/listInvGroups'; 


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">KM Artifact</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/investigadores">Investigadores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/grupos">Grupos de investigación</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        {routes.map(({ url, title, exact, component: Component }) => {
          return (
            <Route
              key={url}
              path={url}
              exact={exact}
              render={props => <Component {...props} title={title} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
