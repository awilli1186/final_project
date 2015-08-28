import React from 'react';

let SearchFields = React.createClass({
  render: function() {
    return (
      <div>
        <label>Find Location</label>
        <input type="text" ref="location" defaultValue={this.props.fieldValues.location} />

          <button className="btn -primary pull-right" onClick={this.saveAndContinue}>Save and Continue</button>
      </div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      location : React.findDOMNode(this.refs.location).value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default SearchFields;
