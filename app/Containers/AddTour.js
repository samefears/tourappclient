import React, {
  Component
} from 'react';

//vendor
import { DateRangePicker } from 'react-dates';
import TagsInput from 'react-tagsinput';

//custom
import AddTourStep2 from './AddTourStep2';
import AddTourStep3 from './AddTourStep3';

export default class AddTour extends Component {
  constructor(props){
    super(props);

    this.state = {
      stepCounter: 0, 
      tourName: '', 
      locations: '',
      numOfBands: 0,
      bandNames: [],
      tags: []
    };
    
  }
 
    //retrieve input values into state
    handleChange = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    sendToState = () => {
      
    }

    //retrieve input value of band names 
    addBandNames = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      const bandNames = { bandNames: [...value, value] };
      console.log(bandNames);
    }

    //increment stepcounter by 1 in state
    handleStepChangeNext = () => {
      let stepCounterRef = this.state.stepCounter;
      this.setState({ stepCounter: stepCounterRef + 1});
    };

    //decrement stepcounter by 1 in state
    handleStepChangeBack = () => {
      let stepCounterRef = this.state.stepCounter;
      this.setState({ stepCounter: stepCounterRef - 1});
    };

    //complete add tour steps
    handleStepChangeComplete = () => {
      alert('YA DONE');
    };

    //handle tag change
    handleTagChange(tags) {
      this.setState({ tags });
    }

    render() {
      return (
        <div className="add-tour container">
          <ul className="add-tour--progress">
            <li className={`add-tour--progress-step${this.state.stepCounter === 0 ? ' active' : null}`}>step</li>
            <li className={`add-tour--progress-step${this.state.stepCounter === 1 ? ' active' : null}`}>step</li>
            <li className={`add-tour--progress-step${this.state.stepCounter === 2 ? ' active' : null}`}>step</li>
          </ul>
        
          {this.state.stepCounter === 0 ? (  
            <div className="tour-steps__form">
              <form action="">
                <fieldset>
                  <label htmlFor="tourName">Tour Name</label>
                  <input type="text" name="tourName"  onChange={ this.handleChange }/>
                </fieldset>
                <fieldset>
                  <TagsInput value={this.state.tags} inputValue={this.state.tag} onChange={ ::this.handleTagChange } />
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

          {this.state.stepCounter === 1 ? (<AddTourStep2 addBandNames={ this.addBandNames } />) : null}
          {this.state.stepCounter === 2 ? (<AddTourStep3 />) : null}

          {/* tour step nav */}
          {/* only add back button if on step 2 or greater */}
          {this.state.stepCounter > 0 ? <button onClick={ this.handleStepChangeBack } className="button">Back</button> : null }
          {this.state.stepCounter === 0 ? <button onClick={() => { this.handleStepChangeNext(); } } className="button">Next</button> : null}
          {this.state.stepCounter === 1 ? <button onClick={() => { this.handleStepChangeNext(); this.sendToState();} } className="button">Next</button> : null}
          {this.state.stepCounter === 2 ? <button onClick={ this.handleStepChangeComplete } className="button">Finish</button> : null}
        </div>
      );
    }
}