import React, {
  Component
} from 'react';
import TagsInput from 'react-tagsinput';




export default class AddTourStep3 extends Component {
  constructor(){
    super();
    this.state = {
      tags:[]
    }
  }
    handleClick = (e) => {
      e.preventDefault();
      alert('YA DONE');
    }
    render() {
      return (
        <div className="container">
          {/* <TagsInput value={ this.state.tags } onChange={ ::this.handleTagChange } /> */}
        </div>
      );
    }
}