import AppDispatcher from '../dispatchers/dispatcher.js';
import {EventEmitter} from 'events';

let data = {
    loading: false,
    stories: []
};

class StoriesStore extends EventEmitter {

    getState() {
        return data;
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

let _StoriesStore = new StoriesStore();

export default _StoriesStore;

AppDispatcher.register((payload) => {
    let action = payload.action;
    switch(action.type) {
        case 'LOAD_STORIES':
            data.loading = true;
            _StoriesStore.emitChange();
            break;
        case 'LOADED_STORIES':
            data.loading = false;
            data.stories = action.data;
            _StoriesStore.emitChange();
            break;
        case 'ADD_STORY':
            data.loading = true;
            _StoriesStore.emitChange();
            break;
        case 'ADDED_STORY':
            data.loading = false;
            data.stories.push(action.data);
            _StoriesStore.emitChange();
            break;
        default:
            break;
  }
});
