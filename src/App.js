import React, { Component} from "react";
import Steps from './components/Steps';
import {Button, Chip, Container, Divider, Grid, Paper, TextField} from "@material-ui/core";


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {_activeStep: 0}
    this.incrementStep = this.incrementStep.bind(this);
  }

  incrementStep() {
    const { _activeStep } = this.state;
    this.setState({_activeStep: _activeStep + 1});
  }

  render() {
    const { _activeStep } = this.state;

    return (
      <Container>
        <Steps _activeStep={_activeStep}/>

        { this._renderStepForm(_activeStep) }

      </Container>
    );
  }

  _renderNextButton() {
    return (
        <Button variant="contained" color="primary" onClick={this.incrementStep}>Next</Button>
    );
  }
  _renderStepForm(step) {
    switch (step) {
      case 0:
        return this._renderStep0Form();
      case 1:
        return this._renderNextButton();
      case 2:
        return this._renderNextButton()
      case 3:
        return this._renderNextButton;
      default:
        return null;
    }
  }

  _renderStep0Form() {

    return (
      <div style={{ width: '100%' }}>
        <Grid container spacing={2} >
          <Grid item sm={12} md={8}>
            <h1> <Chip label="1" style={{fontSize: '.8em'}}/> Enter your zip code </h1>
            <TextField label="Your zip code" />
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper style={{ background: 'lightGrey', padding: '1em 1em'}}>
              <h2>Q:</h2>
              <b>Why do I need to give my zip code?</b>
              <h2>A:</h2>
              <b>
                Different regions and cities have different repair rates, legal
                requirements and standardized practices that can potentially effect
                the cost of repair.
              </b>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Divider />
            <br/>
            {this._renderNextButton()}
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default App;
