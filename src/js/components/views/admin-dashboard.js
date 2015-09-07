import React, { PropTypes } from 'react'
import User from '../../user';
import {Parse} from 'parse';
import $ from 'jquery';
import jQuery from 'jquery';

class AdminDashboard extends React.Component {
  render () {
    let message = "Please log in.";

    if (User.loggedIn) {
      message = `Welcome ${User.username}. This is your dashboard.`;
    }

    return (
      <section className="dashboard">
        <h2>Dashboard</h2>
        <p>{message}</p>
        <div>
          {Story}
        </div>
         <a href="/" >Home</a>
      </section>
    )
  }
}


let Story = Parse.Object.extend("Story");
let query = new Parse.Query(Story);

query.select('location', 'address', 'title', 'media', 'story', 'name', 'date');
  query.find({
      success: function(results) {
         for (var i = 0; i < results.length; i++) {
             var object = results[i];
                 (function($) {
                     $('#results-table').append('<tr><td>' + object.get('title') + '</td><td>' + object.get('story') + '</td></tr>');
                 })(jQuery);
         }
      },
      error: function(error) {
          alert("Error: " + error.code + " " + error.message);
      }
  });
export default AdminDashboard;
