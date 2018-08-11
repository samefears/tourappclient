import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';



export default class AddTourStep3 extends Component {
    handleClick = (e) => {
      e.preventDefault();
      alert('YA DONE');
    }
    render() {
      return (
        <div className="tour-steps__form container">
          <form action="">
            <fieldset>
              <label htmlFor="members">Members</label>
              <input type="text" name="tourName" />
            </fieldset>
            <fieldset>
              <label htmlFor="tourName">Admins</label>
              <input type="text" name="admins" />
            </fieldset>
          </form>
        </div>
      );
    }
}