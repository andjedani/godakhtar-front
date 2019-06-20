import React from "react";
import ProcessForm from "./ProcessForm";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InquiryList from "./InquiryList";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/inquiry" component={InquiryList} />
        <Route exact path="/inquiry/add" component={ProcessForm} />
        <Route exact path="/inquiry/:id([0-9]+)" component={ProcessForm} />
        {/* <Route component={Notfound} /> */}
      </div>
    </Router>
  );
}

export default App;
