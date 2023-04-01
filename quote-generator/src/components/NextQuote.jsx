import Button from "react-bootstrap/Button";

function NextQuote(props) {
  return (
    <Button variant="warning" className="mt-4" onClick={props.handleClick}>
      Next
    </Button>
  );
}

export default NextQuote;
