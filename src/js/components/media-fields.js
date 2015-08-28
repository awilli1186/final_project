import React from 'react';

let MediaFields = React.createClass({
  render() {
    return (
      <div>
        <h2>Add Media!</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="media" defaultValue={this.props.fieldValues.media} />
          </li>
          <li className="form-footer">
             <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.submitStory}>Submit</button>
          </li>
        </ul>
      </div>
    )
  },

  submitStory(e) {
    e.preventDefault()

    // Get values via this.refs
    let data = {
      media: React.findDOMNode(this.refs.media).value
    }

    this.props.saveValues(data)
    this.props.submitStory()
  }
})

export default MediaFields;
