import React from "react";
import { ReactDOM } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalMenu({children}) {
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title style={{ paddingLeft: "130px" }}>Stopwatch Timer App</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Click the button to start timer.</p>
            {children}
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
}
