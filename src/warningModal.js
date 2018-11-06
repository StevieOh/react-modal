import React, { Component } from 'react';
import './App.css';


class warningModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
      >
        <Modal.Header closeButton id="warningModal">
        </Modal.Header>
        <Modal.Body>
          <h4>Hey! Are you still there?</h4>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Yep! I'm here!</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}