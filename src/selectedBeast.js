import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Selected extends React.Component {

  openModal = () => this.props.changeState();
  closeModal = () => this.props.changeState();

    render(){
        return(
          <div variant="primary" onClick={this.openModal}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
            
          >

          </div>
          <Modal show={this.props.checkIsOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.title}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
            )
    }    
    
}

export default Selected;