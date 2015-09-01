import React from 'react';

let Mapbox = React.createClass({
  componentDidMount: function(argument) {
    let props = this.props;

    let mapId = props.mapId || props.src || "mapbox.streets" || "mapbox.places";
    L.mapbox.accessToken = 'pk.eyJ1IjoiYXdpbGxpMTE4NiIsImEiOiIyMWZlNmI0MGM4Nzg4MWI5ODZhOTc2ZDViNWZjMzU4YyJ9.dbgZ4ZW4JI46u5p6hEkcrg';
    let options = {};
    let ownProps = ['mapId', 'onMapCreated'];
    for (var k in props) {
      if (props.hasOwnProperty(k) && ownProps.indexOf(k) === -1) {
        options[k] = props[k];
      }
    }

    let map = L.mapbox.map(this.getDOMNode(), mapId, options);

    if (this.props.onMapCreated) {
      this.props.onMapCreated(map, L);
    }
  },

  render: function() {
  let mapStyle = {
    width: '100%',
    height: '80%'
  };

  return (
    <div style={mapStyle}></div>
  );
}
});

export default Mapbox;
