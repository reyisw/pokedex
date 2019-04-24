import React, { Component } from "react";
import { Router } from "react-router-dom";

import Form from "./components/Form";
import History from "./utils/History";

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <div className="App">
          <Form />
        </div>
      </Router>
    );
  }
}

export default App;
