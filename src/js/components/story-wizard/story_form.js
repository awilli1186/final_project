import React from 'react';
import Parse from '../../parse';
import $ from 'jquery';
import SearchFields from '../story-wizard/search-fields';
import StoryFields from '../story-wizard/story-fields';
import MediaFields from '../story-wizard/media-fields';
import Confirmation from '../story-wizard/confirmation';
import Success from '../story-wizard/success';
import assign from 'object-assign';
import StoryAction from '../../actions/story';
import StoriesStore from '../../stores/stories';


let StoryForm = React.createClass({

  componentDidMount: function() {
    StoriesStore.addChangeListener(() => {
      if (!StoriesStore.getState().loading) {
        this.nextStep();
      }
    });
  },

  getInitialState() {
    return {
      step : 1,
      location   : null,
      title      : '',
      story      : '',
      name       : '',
      date       : '',
      media      : null
    }
  },

  saveValues(field_value) {
    this.state = assign({}, this.state, field_value);
  },

  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitStory() {
    StoryAction.addStory(this.state);
  },

  showStep() {
    switch (this.state.step) {
      case 1:
        return <SearchFields  fieldValues={this.state}
                              nextStep={this.nextStep}
                              saveValues={this.saveValues} />
      case 2:
        return <StoryFields  fieldValues={this.state}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <MediaFields  fieldValues={this.state}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />

      case 4:
        return <Confirmation fieldValues={this.state}
                             previousStep={this.previousStep}
                             submitStory={this.submitStory}
                             />

      case 5:
        return <Success />
  }
  },

  render() {
    let style = {
      width : (this.state.step / 5 * 100) + '%'
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
