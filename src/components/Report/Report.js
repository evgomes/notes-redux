import React from "react";

import { connect } from 'react-redux';

import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader/CardHeader";
import CardBody from "../ui/Card/CardBody/CardBody";

const Report = (props) => {
  const date = props.lastUpdate ? props.lastUpdate.toLocaleString() : "-";

  return (
    <Card>
      <CardHeader title="Status" />
      <CardBody>
        <p>
          <strong>Total notes:</strong> {props.notes.length}
        </p>
        <p>
          <strong>Last update:</strong> {date}
        </p>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
  lastUpdate: state.lastUpdate,
});

export default connect(mapStateToProps)(Report);
