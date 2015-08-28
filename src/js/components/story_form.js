import React from 'react';
import SearchFields from './search-fields';
import StoryFields from './story-fields';
import MediaFields from './media-fields';
// import SubmitStory from './submit-story';
import assign from 'object-assign';

let fieldValues = {
  location   : null,
  title      : null,
  story      : null,
  name       : null,
  date       : null,
  tag        : null
}

let StoryForm = React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitStory: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <SearchFields  fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <StoryFields  fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <MediaFields  fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 4:
        return <SubmitStory fieldValues={fieldValues}
                            SubmitStory={this.submitStory} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress1" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
})

export default StoryForm;
