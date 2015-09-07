import React from 'react';
import StoryForm from './story-wizard/story_form';
import Modal from 'boron/DropModal';

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
                <a className='add' onClick={this.showModal}>
                  Add Story</a>
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
