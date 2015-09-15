import React, { PropTypes } from 'react'
import User from '../../user';
import {Parse} from 'parse';
import $ from 'jquery';
import jQuery from 'jquery'
import LogoutButton from '../views/logout';
import Router, { Link } from 'react-router';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }
  componentDidMount () {
    let Story = Parse.Object.extend("Story");
    let Stories = Parse.Collection.extend({
      model: Story,
      comparator: function(a, b) {
        if(a.createdAt > b.createdAt) {
          return -1;
        }
        return 1;
      }
    });

    let stories = new Stories();
      stories.fetch({
        success: (results) => {
          let stories = results.map(data => {
            let story = data.attributes;
            return {
              id: data.id,
              title: story.title,
              story: story.story,
              address: story.address,
              date: story.date,
              name: story.name,
              media: story.media,
              createdAt: data.createdAt,
            };
         });
          this.setState({
            stories: stories
          });
        }
      });
    }

    deleteStory(storyId) {
      var Story = Parse.Object.extend("Story");
      var query = new Parse.Query(Story);
      query.get(storyId, {
        success: (story) => {
          // The object was retrieved successfully.
          story.destroy({});

          let stories = this.state.stories.filter(story => {
            return story.id !== storyId
          });

          this.setState({stories: stories});
        },
        error: (object, error) => {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and description.
          alert(`error...not deleted: ${error}`);
        }
      });
    }

  render () {
    let message = "Please log in.";
    let list = {};
    let storiesTitle = '';
    let logout = {};

    if (User.loggedIn) {
      message = `Welcome ${User.username}.`;
      logout = <LogoutButton/>
      storiesTitle =`Submitted Stories`;
      list =
        this.state.stories.map(story => {
          let media;

          if (story.media) {
            media = <img src={story.media.url()}/>
          }
          return (
            <li key={story.id}>
              <h3>{story.title}</h3>
              <p className='story'>{story.story}</p>
              <p>{story.address}</p>
              <p>{story.name}</p>
              <p>{story.date}</p>
              <p>Created: {story.createdAt.toString()}</p>
             {media}
             <button type="button" className="btn btn-primary" onClick={this.deleteStory.bind(this, story.id)}>Delete</button>
            </li>
          );
        })
    }

    return (
      <section className="dashboard">
        <h2>Admin Dashboard</h2>
        <p>{message}</p>
        {logout}
          <h2>{storiesTitle}</h2>
          <div id="list">
            {list}
          </div>

        <Link to="map" className="btn btn-primary">HOME</Link>
      </section>
    )
  }
}

export default AdminDashboard;
