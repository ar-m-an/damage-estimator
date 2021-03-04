import React, { Component} from "react";
import Steps from './components/Steps';
import {
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid, InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from "@material-ui/core";


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
        return this._renderStep1Form();
      case 2:
        return this._renderNextButton()
      case 3:
        return this._renderNextButton();
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

  _renderStep1Form() {
    return (
      <div style={{ width: '100%' }}>
        <Grid container spacing={2} >
          <Grid container item sm={12} md={8} spacing={2}>
            <h1> <Chip label="2" style={{fontSize: '.8em'}}/> Enter Year, Make, and Model </h1>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel> Year </InputLabel>
                <Select defaultValue={2020}>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>

              <FormControl fullWidth>
                <InputLabel> Vehicle Make </InputLabel>
                <Select defaultValue="Make 1">
                  <MenuItem value="Make 1">Make 1</MenuItem>
                  <MenuItem value="Make 2">Make 2</MenuItem>
                  <MenuItem value="Make 3">Make 3</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel> Model </InputLabel>
                <Select defaultValue="Model 1">
                  <MenuItem value="Model 1">Model 1</MenuItem>
                  <MenuItem value="Model 2">Model 2</MenuItem>
                  <MenuItem value="Model 3">Model 3</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel> Type </InputLabel>
                <Select defaultValue="Type 1">
                  <MenuItem value="Type 1">Type 1</MenuItem>
                  <MenuItem value="Type 2">Type 2</MenuItem>
                  <MenuItem value="Type 3">Type 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper style={{ background: 'lightGrey', padding: '1em 1em'}}>
              <h2>Q:</h2>
              <b>Why do I need to give my cars make and model?</b>
              <h2>A:</h2>
              <b>
                Each make and model vary on paint labor times due to differences
                in surface area of each make/model's panels.
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
