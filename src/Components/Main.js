import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Col,
  Input,
  Label,
} from "reactstrap";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Main(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [vote, setVote] = useState("");

  return (
    <div>
      {/* nav */}
      <Navbar expand="md">
        <NavbarBrand href="/">Let's Vote</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ color: "white" }}>
          &#9776;
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <NavbarText
            className="ml-auto"
            onClick={() => props.logout()}
            style={{ cursor: "pointer" }}
          >
            Logout
          </NavbarText>
        </Collapse>
      </Navbar>

      {/* modal */}
      <div>
        <Modal isOpen={modal} toggle={toggleModal} className="mb-2">
          <ModalHeader toggle={toggleModal} className="mx-5 my-2">
            Parliamentary General Elections
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup tag="fieldset" row>
                <Col sm={10} style={{ margin: "5% 15%" }}>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio1"
                      value="AITC"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio1">
                      All India Trinamool Congress
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio2"
                      value="BSP"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio2">
                      Bahujan Samaj Party
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio3"
                      value="BJP"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio3">
                      Bharatiya Janata Party
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio4"
                      value="CPI"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio4">
                      Communist Party of India
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio5"
                      value="INC"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio5">
                      Indian National Congress
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="radio"
                      id="radio6"
                      value="NOTA"
                      onClick={(e) => setVote(e.target.value)}
                    />
                    <Label check for="radio6">
                      None of the above
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col style={{ textAlign: "center", margin: "10px" }}>
                  <Button
                    onClick={(e) => {
                      props.onVote(vote);
                      e.preventDefault();
                      setModal(!modal);
                      console.log("submitted");
                    }}
                    style={{ fontWeight: "600" }}
                  >
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>

      {/* elections  */}
      {props.state.vote === "" ? (
        <div className="election py-1">
          <div className="election-inner m-4">
            Parliamentary General Elections{" "}
          </div>
          <div className="election-inner m-4" style={{ display: "flex" }}>
            <p>21st Sept 2021</p>
            <p className="ml-auto">
              <Button onClick={toggleModal}>
                Vote <ChevronRightIcon />
              </Button>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center">No Upcoming elections</h2>
        </div>
      )}
    </div>
  );
}

export default Main;
