import React from 'react';

let MediaFields = React.createClass({
  render() {
    return (
      <div>
        <h2>Add Media</h2>
        <ul className="form-fields">
          <li>
            <label>Photo</label>
                <input type="file" ref='media' accept="image/*" defaultValue={this.props.fieldValues.media} />
          </li>
          <li className="form-footer">
             <button className="btn btn-default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn btn-primary pull-right" onClick={this.saveAndContinue}>Save & Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()


    // Get values via this.refs
    let data = {
      media: React.findDOMNode(this.refs.media).value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default MediaFields;
