import React from "react";

import { connect } from 'react-redux';
import { handleDeleteNote } from '../../state/actions';

import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader/CardHeader";
import CardBody from "../ui/Card/CardBody/CardBody";
import CardFooter from "../ui/Card/CardFooter/CardFooter";

import Button from "../ui/Button/Button";

import "./Note.css";

const Note = props => {
  return (
    <div className="note">
      <Card>
        <CardHeader title={props.title} />
        <CardBody>{props.text}</CardBody>
        <CardFooter>
          <Button onClick={() => props.onDeleteNote(props.id)} type="danger">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteNote: (noteId) => dispatch(handleDeleteNote(noteId)),
})

export default connect(null, mapDispatchToProps)(Note);
