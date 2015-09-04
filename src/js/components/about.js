import React from 'react';

let About = React.createClass ({

  render() {
    return (
      <div className='about'>
         <h1>About Page</h1>
         <p>Vision: The goal of this project is to make history personal for our community and encourage people to take ownership of their past. By creating an interactive platform for story sharing, this project will allow participants to share their memories and engage in meaningful conversations about their neighborhood. Voices of the Past will not only inspire discussions about memory and history, but also allow individuals to consider the meaning of the "past" in our technology driven society as they read stories that date from hundreds of years ago to yesterday. The spatial component of this project is intended to show the overlapping of historical narratives within the community. By highlighting intersections of people from different generations, races, and socioeconomic backgrounds, the project will encourage conversations with individuals outside traditional social groups.</p>
         <a href="/" >Home</a>
    </div>
    )
  }
});

About.contextTypes = {
  router: React.PropTypes.func
};

export default About;
