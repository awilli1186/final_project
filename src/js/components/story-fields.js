import React from 'react';

let StoryFields = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Story Details</h2>
        <ul className="form-fields">
          <li>
            <label>Title</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.title} />
          </li>
          <li>
            <label>Story</label>
            <textarea type="text" ref="story" defaultValue={this.props.fieldValues.story} />
          </li>
          <li>
            <label>Submitter Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>Historic Date</label>
            <input type="text" ref="date" defaultValue={this.props.fieldValues.date} />
          </li>
          <li>
            <label>Tags</label>
            <input type="text" ref="tags" defaultValue={this.props.fieldValues.tag} />
          </li>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
        </ul>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      title : this.refs.title.findDOMNode().value,
      story : this.refs.story.getDOMNode().value,
      name : this.refs.name.getDOMNode().value,
      date : this.refs.date.getDOMNode().value,
      tag : this.refs.tag.getDOMNode().value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default StoryFields;
