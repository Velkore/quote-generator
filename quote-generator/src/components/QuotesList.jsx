import ListGroup from "react-bootstrap/ListGroup";

function QuotesList(props) {
  const listItems = props.backendData.map((quote) => (
    <ListGroup.Item key={quote.id} className="bg-dark text-light">
      <strong>{quote.content}</strong>
      <br /> ~ {quote.author}
    </ListGroup.Item>
  ));

  return (
    <ListGroup className="text-center mx-auto mt-5" style={{ width: "80rem" }}>
      {listItems}
    </ListGroup>
  );
}

export default QuotesList;
