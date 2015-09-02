import React from "react";
import Mapbox from "../map/mapbox";
import {Parse} from 'parse';
import $ from 'jquery';

let Map = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Mapbox
          mapId="awilli1186.na0889jj"
          zoomControl={true}
          scrollWheelZoom={false}
          minZoom={10}
          maxZoom={14}
          center={[36.161589,-86.7739455]} zoom={14} maxZoom={20}
          onMapCreated={this._onMapCreated}/>
      </div>
    );
  },
  _onMapCreated: function(map, L) {
    // let marker = new L.Marker(new L.LatLng(36.1667, -86.7833));
    // map.addLayer(marker);
    let Story = Parse.Object.extend("Story");
    let query = new Parse.Query(Story);
    query.equalTo("arrayKey", 2);
  query.find({
    success: function(results) {
      console.log("Successfully retrieved " + results.length + " locations.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        console.log(object.id + ' - ' + object.get('location'));
        console.log('location');
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
     }
});

export default Map;


//
