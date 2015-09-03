import React from "react";
import Mapbox from "../map/mapbox";
import {Parse} from 'parse';
import $ from 'jquery';

let Map = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Mapbox
          mapId="mapbox.streets"
          zoomControl={true}
          scrollWheelZoom={false}
          center={[36.161589,-86.7739455]} zoom={12} maxZoom={20} minZoom={10}
          onMapCreated={this._onMapCreated}/>
      </div>
    );
  },
  _onMapCreated: function(map, L) {

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
          icon: L.mapbox.marker.icon({'marker-symbol': 'marker-stroked', 'marker-color': 'F2AE72'}),
        });

        var popupContent =  title + '<br/>' + '<img src="' + media + '" />' + '<br/>' + disc + '<br/>' + address + '<br/>' + date + '<br/>' + 'Submitted by: ' + name;


        marker.bindPopup(popupContent, {
          className: 'popup',
          closeButton: false,
          minWidth: 350,
          minHeight: 300
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

export default Map;
