import React, { useState } from "react";

import { handleAddNote } from '../../state/actions';

import { connect } from 'react-redux';

import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader/CardHeader";
import CardBody from "../ui/Card/CardBody/CardBody";
import CardFooter from "../ui/Card/CardFooter/CardFooter";
import FormGroup from "../ui/FormGroup/FromGroup";
import TextBox from "../ui/TextBox/TextBox";
import TextArea from "../ui/TextArea/TextArea";

import Button from "../ui/Button/Button";

const AddNote = (props) => {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  const _onChageInput = (input, e) => {
    e.persist();
    setState(prevState => ({ ...prevState, [input]: e.target.value }));
  };

  const _onAddNote = () => {
    const note = {
      id: new Date().getMilliseconds(),
      title: state.title,
      text: state.text
    };

    props.onAddNote(note);

    setState({
      title: "",
      text: ""
    });
  };

  return (
    <Card>
      <CardHeader title="Add note" />
      <CardBody>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <TextBox
            name="title"
            maxLength="30"
            value={state.title}
            onChange={e => _onChageInput("title", e)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="text">Text</label>
          <TextArea
            name="text"
            cols="1"
            rows="5"
            value={state.text}
            onChange={e => _onChageInput("text", e)}
          />
        </FormGroup>
      </CardBody>
      <CardFooter>
        <Button onClick={_onAddNote}>Add</Button>
      </CardFooter>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddNote: (note) => dispatch(handleAddNote(note)),
});

export default connect(null, mapDispatchToProps)(AddNote);
