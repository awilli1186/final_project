import React from 'react';

let Confirmation = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Confirm Story</h2>
        <ul>
          <li><b>Location:</b> {this.props.fieldValues.location.placeName}</li>
          <li><b>Title:</b> {this.props.fieldValues.title}</li>
          <li><b>Story:</b> {this.props.fieldValues.story}</li>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Date:</b> {this.props.fieldValues.date}</li>
          <li><b>tag:</b> {this.props.fieldValues.tag}</li>
        </ul>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn btn-default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn btn-primary pull-right" onClick={this.props.submitStory}>Submit Story</button>
          </li>
        </ul>
      </div>
    )
  }
})

export default Confirmation;
