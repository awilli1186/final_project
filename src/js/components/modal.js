import React from 'react';
import StoryForm from './story-wizard/story_form';
import Modal from 'boron/DropModal';

var Trigger = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
      this.context.router.transitionTo('/');
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
                <a className='add' onClick={this.showModal}>
                  ADD STORY</a>
                <Modal className='modal' ref="modal">
                  <button className='close' onClick={this.hideModal}>X</button>
                  <h2>ADD STORY</h2>
                    <StoryForm />
                </Modal>
            </div>
        );
    }
});

Trigger.contextTypes = {
    router: React.PropTypes.func
};

export default Trigger;
