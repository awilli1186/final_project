import React from 'react';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import StoryForm from './story_form';

let Trigger = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>

        <Button className='add'
          onClick={this.open}>
          Add Story
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Story</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <StoryForm/>
          </Modal.Body>

          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default Trigger;
