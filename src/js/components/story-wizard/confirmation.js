import React from 'react';
import StoriesStore from '../../stores/stories';

let Confirmation = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    };
  },

  componentDidMount: function() {
    StoriesStore.addChangeListener(() => {
      console.log('called change', StoriesStore.getState().loading);
      this.setState({
        loading: StoriesStore.getState().loading
      });
    });
  },
  render: function() {
    let submitText = 'Submit Story';
    if (this.state.loading) {
      submitText = <img src="/images/ajax-loader.gif" alt="Loading..."/>
    }
    return (
      <div className="confirmation">
        <h2>Confirm Story</h2>
        <ul>
          <li><b>Location:</b> {this.props.fieldValues.location.placeName}</li>
          <li><b>Title:</b> {this.props.fieldValues.title}</li>
          <li><b>Story:</b> {this.props.fieldValues.story}</li>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Date:</b> {this.props.fieldValues.date}</li>
          <li><b>Media:</b> {this.props.fieldValues.media.name()}</li>
        </ul>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn btn-default pull-left" onClick={this.props.previousStep}>Back</button>
            <button id='submit' className="btn btn-primary pull-right" onClick={this.props.submitStory}>{submitText}</button>
          </li>
        </ul>
      </div>
    )
  }
})

export default Confirmation;
