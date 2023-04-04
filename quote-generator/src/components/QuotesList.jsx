import React from "react";
import { Badge } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function QuotesList(props) {
  const listItems = props.backendData.map((quote) => {
    //console.log(quote);
    return (
      <ListGroup.Item key={quote.id} className="bg-dark text-light">
        <strong>{quote.content}</strong>
        <br /> ~ {quote.author}
        <Badge
          pill
          bg="warning"
          text="dark"
          className="position-absolute"
          style={{ top: 0, left: 0, fontSize: 16 }}
        >
          {quote.id}
        </Badge>
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup className="text-center mx-auto mt-5" style={{ width: "80rem" }}>
      {listItems}
    </ListGroup>
  );
}

export default QuotesList;
