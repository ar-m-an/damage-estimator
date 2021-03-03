import logo from './logo.svg';
import './App.css';
import React, { Component} from "react";
import Steps from './components/Steps';
import {Container} from "@material-ui/core";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {_activeStep: 0}
  }

  render() {
    return (
        <Container>
          <Steps _activeStep={0}/>
        </Container>
    );
  }
}

export default App;
