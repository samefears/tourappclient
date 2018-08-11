import React, {
  Component
} from 'react';
import { DateRangePicker } from 'react-dates';

import AddTourStep1 from './AddTourStep1';
import AddTourStep2 from './AddTourStep2';
import AddTourStep3 from './AddTourStep3';



export default class AddTour extends Component {
  constructor(props){
    super(props);
    // let stepCounter = this.stepCounter;
    this.state = {};
    
  }
  componentDidMount() {
    this.setState({stepCounter: 0});
  }
  
    handleStepChangeNext = () => {
      let stepCounterRef = this.state.stepCounter;
      this.setState({ stepCounter: stepCounterRef + 1});
      console.log(this.state.stepCounter);
    };
    handleStepChangeBack = () => {
      let stepCounterRef = this.state.stepCounter;
      this.setState({ stepCounter: stepCounterRef - 1});
      console.log(this.state.stepCounter);
    };
    handleStepChangeComplete = () => {
      alert('YA DONE');
    };
  

    render() {
      return (
        <div className="add-tour">
          <ul className="add-tour--progress">
            <li className={ `add-tour--progress-step${  this.state.stepCounter === 0 ? ' active' : null}` }>Step 1</li>
            <li className={ `add-tour--progress-step${  this.state.stepCounter === 1 ? ' active' : null}` }>Step 2</li>
            <li className={ `add-tour--progress-step${  this.state.stepCounter === 2 ? ' active' : null}` }>Step 3</li>
          </ul>
        
          {this.state.stepCounter === 0 ? (  
            <div className="tour-steps__form container">
              <form action="">
                <fieldset>
                  <label htmlFor="tourName">Tour Name</label>
                  <input type="text" name="tourName" />
                </fieldset>
                <fieldset>
                  <label htmlFor="locations">Locations</label>
                  <input type="text" name="locations" />
                </fieldset>
              </form>
              <DateRangePicker
                startDate={ this.state.startDate } // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={ this.state.endDate } // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={ ({ startDate, endDate }) => this.setState({ startDate, endDate }) } // PropTypes.func.isRequired,
                focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={ (focusedInput) => this.setState({ focusedInput }) }
              />
              <br />
              <br />
              <div>image upload will go here</div>
              <br />
              <br />
            
            </div>
          ) : null}

          {this.state.stepCounter === 1 ? (<AddTourStep2 />) : null}
          {this.state.stepCounter === 2 ? (<AddTourStep3 />) : null}

        
          {/* only add back button if on step 2 or greater */}
          {this.state.stepCounter > 0 ? <button onClick={ this.handleStepChangeBack }>Back</button> : null }
          {this.state.stepCounter < 2 ? <button onClick={ this.handleStepChangeNext }>Next</button> : null}
          {this.state.stepCounter === 2 ? <button onClick={ this.handleStepChangeComplete }>Finish</button> : null}
        </div>
      );
    }
}