import React from 'react';
import $ from 'jquery';
import {Parse} from 'parse';
var ParseReact = require('parse-react');

let MediaFields = React.createClass({
  getInitialState() {
    return {media: null}
  },

  handleChange(e) {
   this.setState({media: e.target.value})
 },

  render() {
    let media;
    if (this.state.media) {
      media = this.state.media;
    }

    return (
      <div>
        <h2>Add Media</h2>
        <ul className="form-fields">
          <li>
            <label>Photo</label>
                <input type="file" ref='media' defaultValue={this.props.fieldValues.media} onChange={this.handleChange} />
          </li>
          <li className="form-footer">
             <button className="btn btn-default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn btn-primary pull-right" onClick={this.saveAndContinue} disabled={!media}>Save & Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    let self = this;
    let fileUploadControl = React.findDOMNode(this.refs.media);
      if (fileUploadControl.files.length > 0) {
        let file = fileUploadControl.files[0];
        let name = fileUploadControl.value.match(/[^\/\\]+$/)[0];
        let parseFile = new Parse.File(name, file);

        let data = {
            media: parseFile
        };

        self.props.saveValues(data);
        self.props.nextStep();
      }
  }
});

export default MediaFields;
