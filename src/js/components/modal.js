import React from 'react';
import StoryForm from './story-wizard/story_form';
import Modal from 'boron/DropModal';
var FontAwesome = require('react-fontawesome');


var Trigger = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
                <button className='add' onClick={this.showModal}>
                  <FontAwesome
                    className='header-icon'
                    name='plus-circle'
                  />
                  Add Story</button>
                <Modal className='modal' ref="modal">
                  <button className='close' onClick={this.hideModal}>X</button>
                  <h2>Add Story</h2>
                    <StoryForm />
                </Modal>
            </div>
        );
    }
});

export default Trigger;
