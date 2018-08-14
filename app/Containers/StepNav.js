import React, {
  Component
} from 'react';

export default class StepNav extends Component {

    steps = () => {
      const count = this.state.stepCounter;
      switch (count) {
        case count > 0 :
          return <button onClick={ this.handleStepChangeBack } className="button">Back</button>;
        case count === 0 :
          return <button onClick={ this.handleStepChangeNext } className="button">Next</button>;
        case count === 1:
          return <button onClick={ () => { this.handleStepChangeNext(); this.sendToState(); } } className="button">Next</button>;
        case count === 2:
          return <button onClick={ this.handleStepChangeComplete } className="button">Finish</button>;
        default:
          return null;
      }
    }

    render() {


      return (
        <div>
          {this.steps}
        </div>
      );
    }
}