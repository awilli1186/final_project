import React from "react";
import Mapbox from "../map/mapbox";
import {Parse} from 'parse';
import $ from 'jquery';
import StoryAction from '../../actions/story';
import StoriesStore from '../../stores/stories';

let Map = React.createClass({

  getInitialState: function() {
    return {
      stories: []
    };
  },

  componentDidMount: function() {
    StoryAction.loadAll();

    StoriesStore.addChangeListener(() => {
      this.setState({
        stories: StoriesStore.getState().stories
      });

      this.renderMarkers(this.state.map, this.state.L);
    });
  },

  render: function() {
    return (
      <div className="map">
        <p>Share your story...</p>
        <Mapbox
          ref="map"
          mapId="awilli1186.nbobioh0"
          zoomControl={true}
          scrollWheelZoom={false}
          center={[36.161589,-86.7739455]}
          zoom={12}
          onMapCreated={this.onMapCreated}
          />
      </div>
    );
  },

  renderMarkers: function(map, L) {
    if (this.state.stories) {
      let markers = new L.MarkerClusterGroup();

      this.state.stories.forEach(data => {
        let story = data.attributes;
        let {latitude, longitude} = story.location;
        let disc = story.story;
        let { title, name, date, address, media} = story;
        let marker = L.marker(new L.LatLng(latitude, longitude), {
          icon: L.mapbox.marker.icon({
            'marker-symbol': 'star-stroked',
            'marker-size': 'large',
            'marker-color': '2C3E50'
          })
        });

        let popupContent =  `
          ${title} <br/>

          <img id="img" src="${media.url()}" /><br/>

          <p>${disc}</p> <br/>
            ${address} <br/>
            ${date} <br/>

          Submitted by: ${name}
        `;

        marker.bindPopup(popupContent, {
          className: 'popup',
          keepInView: true,
          closeButton: true,
          minWidth: 350,
          minHeight: 300,
        });

        markers.addLayer(marker);
      });

      map.addLayer(markers);
    }
  },
  onMapCreated: function(map, L){

    this.setState({
      map: map,
      L: L
    });

    this.renderMarkers(map, L);
  }
});

Map.contextTypes = {
  router: React.PropTypes.func
};

export default Map;
