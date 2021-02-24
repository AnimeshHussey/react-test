import React from "react";
import { Card } from "semantic-ui-react";

const CardComponent = (props) => (
  <Card>
    <Card.Content header={props?.item.name} />
    <Card.Content description={props.item.date} />
    <Card.Content description={props.item.tags} />
    <Card.Content
      description={props.item.updated ? props.item.updated : props.item.date}
    />
    <Card.Content description={props.item.description} />
  </Card>
);

export default CardComponent;
