import React from 'react';

var Success = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    return (
      <div>
        <h2>Story submitted successfully!</h2>
      </div>
    )
  }
});


export default Success;
