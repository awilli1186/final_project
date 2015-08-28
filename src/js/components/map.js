import React from "react";
import Mapbox from "./mapbox";

let Map = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Mapbox
          mapId="awilli1186.na0889jj"
          zoomControl={true}
          center={[36.161589,-86.7739455]} zoom={14} maxZoom={20}
          onMapCreated={this._onMapCreated}/>
      </div>
    );
  },
  _onMapCreated: function(map, L) {
    // let marker = new L.Marker(new L.LatLng(36.1667, -86.7833));
    map.addLayer(marker);
  }
});

export default Map;
