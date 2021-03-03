import React, { Component } from 'react';
import {Step, StepLabel, Stepper} from "@material-ui/core";

export default class Steps extends Component {
    render () {
        const steps = [
            'Your Location',
            'Your Vehicle',
            'The Damage',
            'Your Info',
        ]
        const { _activeStep } = this.props;

        return (
           <Stepper activeStep={_activeStep}>
               {steps.map((step, i) => <Step key={i}>
                   <StepLabel>{step}</StepLabel>
               </Step>)}
           </Stepper>);
    }
}