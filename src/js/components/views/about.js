import React from 'react';

let About = React.createClass ({

  render() {
    return (
      <div className='about'>
         <h1>About Page</h1>
         <p>Vision: <br/> The goal of this project is to make history personal for our community and encourage people to take ownership of their past. By creating an interactive platform for story sharing, this project will allow participants to share their memories and engage in meaningful conversations about their neighborhood. Voices of Nashville will not only inspire discussions about memory and history, but also allow individuals to consider the meaning of the "past" in our technology driven society as they read stories that date from hundreds of years ago to yesterday. The project will encourage conversations with individuals outside traditional social groups.</p>
         <p>To add a new story please click <span className='span'>Add Story</span> on the top right of the page to begin sharing your own personal history.</p>
         <a href="/" >Home</a>
    </div>
    )
  }
});

About.contextTypes = {
  router: React.PropTypes.func
};

export default About;
