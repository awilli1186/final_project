import React from 'react';

let MediaFields = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Add Media!</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default MediaFields;
