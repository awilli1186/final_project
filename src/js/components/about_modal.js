import React from 'react';
import Modal from 'boron/FadeModal';
import About from './views/about';

var AboutModal = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
              <a className='aboutmodal' onClick={this.showModal}>
                ABOUT</a>
                <Modal className='modal' ref="modal">
                  <About />
                  <button onClick={this.hideModal} className='closeAbout'>CLOSE</button>
                </Modal>
            </div>
        );
    }
});

AboutModal.contextTypes = {
    router: React.PropTypes.func
};

export default AboutModal;
