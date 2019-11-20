import React, { Component } from "react";
import "./App.css";
import Upload from "./upload/Upload";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Login :
            <input type="text" name="login" />
          </label>
          <label>
            Mot de passe :
            <input type="text" name="mdp" />
          </label>
        </form>
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
