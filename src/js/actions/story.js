import AppDispatcher from '../dispatchers/dispatcher';
import Parse from '../parse';

export default {
    loadAll: () => {
        AppDispatcher.handleViewAction({
            type: 'LOAD_STORIES'
        });

        // DO PARSE STUFF HERE

        let Story = Parse.Object.extend("Story");
        let query = new Parse.Query(Story);

        query.select('location', 'address', 'title', 'media', 'story', 'name', 'date');
        query.find().then(results => {
          AppDispatcher.handleServerAction({
            type: 'LOADED_STORIES',
            data: results
          });
        });
    },

    addStory: (fieldValues) => {
      AppDispatcher.handleViewAction({
          type: 'ADD_STORY'
      });

      let point = new Parse.GeoPoint(fieldValues.location.coordinates);
      let Story = Parse.Object.extend("Story");
      let story = new Story();

      story.set('location', point);
      story.set('address', fieldValues.location.placeName);
      story.set('title', fieldValues.title);
      story.set('story', fieldValues.story);
      story.set('name', fieldValues.name);
      story.set('date', fieldValues.date);
      story.set('media', fieldValues.media);

      story.save(story).then((results) => {
        AppDispatcher.handleServerAction({
          type: 'ADDED_STORY',
          data: results
        });
      });
    }
}
