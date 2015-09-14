import React from "react";
import Mapbox from "../map/mapbox";
import {Parse} from 'parse';
import $ from 'jquery';

let Map = React.createClass({

  render: function() {
    return (
      <div className="map">
        <Mapbox
          mapId="awilli1186.nbobioh0"
          zoomControl={true}
          scrollWheelZoom={false}
          center={[36.161589,-86.7739455]} zoom={12}
          onMapCreated={this._onMapCreated}/>
      </div>
    );
  },
  
  _onMapCreated(map, L) {

    let Story = Parse.Object.extend("Story");
    let query = new Parse.Query(Story);

    query.select('location', 'address', 'title', 'media', 'story', 'name', 'date');
    query.find().then(results => {

      let markers = new L.MarkerClusterGroup();

      results.forEach(data => {
        let story = data.attributes;
        let {latitude, longitude} = story.location;
        let title = story.title;
        let disc = story.story;
        let name = story.name;
        let date = story.date;
        let address = story.address;
        let media = story.media;


        let marker = L.marker(new L.LatLng(latitude, longitude), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'marker-stroked', 'marker-size': 'large', 'marker-color': '2989c6'}),
        });

        var popupContent =  `
          ${title} <br/>

        <img id="img" src="${media.url()}" /><br/>

        <p>${disc}</p> <br/>
          ${address} <br/>
          ${date} <br/>

        Submitted by: ${name}`;

        marker.bindPopup(popupContent, {
          className: 'popup',
          keepInView: false,
          closeButton: true,
          minWidth: 350,
          minHeight: 300,
        });
        markers.addLayer(marker);

      });

      map.addLayer(markers);

      return results;
    }).fail(error => {
      alert("Error: " + error.code + " " + error.message)
    });

  }
});

Map.contextTypes = {
  router: React.PropTypes.func
};

export default Map;
