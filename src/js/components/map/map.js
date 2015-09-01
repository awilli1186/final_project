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
    // function load() {
    //   // Fetch just the contents of a .geojson file from GitHub by passing
    //   // `application/vnd.github.v3.raw` to the Accept header
    //   // As with any other AJAX request, this technique is subject to the Same Origin Policy:
    //   // http://en.wikipedia.org/wiki/Same_origin_policy the server delivering the request should support CORS.
    //   $.ajax({
    //     headers: {
    //       'X-Parse-Application-Id' : 'N8xJQ3gDj0uZL4Bhlz0v21cCoWOvOGCenntyKvwJ',
    //       'X-Parse-REST-API-Key' : '8snh5OsCbMReuDzEu4AceBKyvS8zxiMJFPPlC75P'
    //     },
    //     xhrFields: {
    //       withCredentials: false
    //     },
    //     dataType: 'jsonp',
    //     url: "https://api.parse.com/1/Story",
    //     success: function(geojson) {
    //         // On success add fetched data to the map.
    //         L.mapbox.featureLayer(geojson).addTo(map);
    //     }
    //   });
    // }
     }
});

export default Map;
