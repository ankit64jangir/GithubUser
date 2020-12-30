import React from "react";
import {
    Button,
    InputGroup,
    FormControl,
    Card,
  } from "react-bootstrap";

function Input(props) {
  return (
    <>
      <Card.Body>
        <InputGroup>
          <FormControl
            placeholder="Enter github UserName"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={props.usernameProp}
            onChange={props.onChangeHandlerProp}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={props.submitHandlerProp}
            >
              Search User
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </>
  );
}

export default Input;
