import React from 'react';
import $ from 'jquery';
import {Parse} from 'parse';

let MediaFields = React.createClass({

  render() {
    return (
      <div>
        <h2>Add Media</h2>
        <ul className="form-fields">
          <li>
            <label>Photo</label>
                <input type="file" ref='media' id="profilePhotoFileUpload" defaultValue={this.props.fieldValues.media} />
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

    let fileUploadControl = $("#profilePhotoFileUpload")[0];
      if (fileUploadControl.files.length > 0) {
    let file = fileUploadControl.files[0];
    let name = "photo.jpg";

    let parseFile = new Parse.File(name, file);
  }

    parseFile.save().then(function() {
    // The file has been saved to Parse.
  }, function(error) {
    // The file either could not be read, or could not be saved to Parse.
  });

    // Get values via this.refs
    let data = {
      media: React.findDOMNode(this.refs.media).value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

export default MediaFields;
