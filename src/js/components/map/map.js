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
          center={[36.161589,-86.7739455]} zoom={11} maxZoom={20} minZoom={10}
          onMapCreated={this._onMapCreated}/>
      </div>
    );
  },
  _onMapCreated: function(map, L) {
    let Story = Parse.Object.extend("Story");
    let query = new Parse.Query(Story);

    query.select("location", 'title', 'story', 'name', 'date');
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
        // let media = story.media

        let marker = L.marker(new L.LatLng(latitude, longitude), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'star', 'marker-color': 'F2AE72'}),
          title: title,
          disc: disc,
          name: name,
          date: date,
          address: address,
          // media: media
        });

        var popupContent =  title + disc + name + date;


        marker.bindPopup(popupContent, {
          className: 'popup',
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
