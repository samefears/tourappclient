import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';




export default class AddTourStep2 extends Component {

addInputs = (e) => {
  console.log('working');
  const target = document.querySelector('.target');
  const value = e.target.value;

  //empty the target div when reselecting number of bands
  target.innerHTML = '';

  //set iterator to 0
  let i = 0;

  //create inputs based on numeber of bands chosen
  while (i < value) {
    i++;
    let bandNameInput = ` <fieldset><label htmlFor="bandname">BAND ${i +
      1} </label><input type="text" placeholder="Band Name" name="bandName" onChange={this.props.handleChange}/></fieldset>`;
    target.innerHTML += bandNameInput;
  }
};


render() {
  return (
    <div className="tour-steps__form container">
      <form action="">
        <fieldset className="tour-steps__location">
          <label htmlFor="numOfBands"># Of Bands</label>
          <select name="numOfBands" onChange={ this.addInputs }>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <div className="target" />
        </fieldset>
      </form>
    </div>

  );
}
}