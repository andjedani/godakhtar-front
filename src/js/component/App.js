import React from "react";
import ProcessForm from "./ProcessForm";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/inquery/add" component={ProcessForm} />
        <Route exact path="/inquery" component={Home} />
      </div>
    </Router>
  );
}

export default App;
