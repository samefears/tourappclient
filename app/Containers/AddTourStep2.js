import React, {
  Component
} from 'react';

export default class AddTourStep2 extends Component {
  constructor(props){
    super(props);
    this.state = {numOfBands: 0};
  }

addInputs = (e) => {
  //get value from select 
  const value = e.target.value;
  // //set iterator to 0
  let i = this.state.numOfBands;

  //set this.state.numOfBands to value of input
  while (i < value) {
    i++;
    this.setState({numOfBands: i});
  }
};

render() {
  const inputs = [];
  const numOfBands = this.state.numOfBands;
  
  for (var i = 0; i < numOfBands; i++) {
    inputs.push(
      <fieldset>
        <label htmlFor="bandname">BAND {i + 1} </label>
        {/* wrong event for adding to array */}
        <input type="text" placeholder="Band Name" name={`bandName${i + 1}`} key={i + 1} onChange={ this.props.addBandNames } />
      </fieldset>
    );
    
  }
  return (
    <div className="tour-steps__form">
      <form action="">
        <fieldset className="tour-steps__location">
          <label htmlFor="numOfBands"># Of Bands</label>
          <select name="numOfBands" onChange={ this.addInputs } >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <div className="target">
            {inputs}
          </div>
        </fieldset>
      </form>
    </div>
  );
}
}