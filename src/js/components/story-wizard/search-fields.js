import React from 'react';
import $ from 'jquery';
import {_} from 'lodash';

let SearchFields = React.createClass({
  getInitialState() {
    return {
      location: {
        placeName: '',
        coordinates: {}
      },
    }
  },

  onLocationSearch() {
    let self = this;
    let location = encodeURIComponent(React.findDOMNode(this.refs.location).value);
    let accessToken = 'pk.eyJ1IjoiYXdpbGxpMTE4NiIsImEiOiIyMWZlNmI0MGM4Nzg4MWI5ODZhOTc2ZDViNWZjMzU4YyJ9.dbgZ4ZW4JI46u5p6hEkcrg';
    let url = `https://api.mapbox.com/v4/geocode/mapbox.places/${location}.json?access_token=${accessToken}`;

    $.ajax(url).done((response) => {
      if (response.features) {
        let coordinates = {
          latitude: Number(response.features[0].geometry.coordinates[1]),
          longitude: Number(response.features[0].geometry.coordinates[0])
        }
        let location = {
          coordinates: coordinates,
          placeName: response.features[0].place_name
        };

        self.setState({
          value: event.target.value,
          location
        });
      }
    }).error(() => {

    });
  },


  render: function() {
    let location;
    if (this.state.location && this.state.location.placeName) {
      location = this.state.location.placeName;
    }
    return (
      <div>
        <label>Find Location</label>
        <input
          type="text"
          ref="location"
          defaultValue={this.props.fieldValues.location}
          onChange={_.debounce(this.onLocationSearch, 250)}
        />

        <div className='loc-output'>
          {location}
        </div>

        <button className="btn btn-primary pull-right" onClick={this.saveAndContinue} disabled={!location}>Save and Continue</button>
      </div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    let data = {
      location : this.state.location
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }
})

export default SearchFields;
