import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function QuoteBlock(props) {
  return (
    <>
      <Card
        className="card text-bg-dark bg-gradient mx-auto mt-5 p-3 text-center"
        style={{ width: "50rem" }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.quote.content}</p>
            <footer className="blockquote-footer mt-2">
              <cite className="text-light" title="Source Title">
                {props.quote.author}
              </cite>
            </footer>
          </blockquote>
          <Button
            variant="warning"
            className="mt-4 fs-5"
            onClick={props.update}
          >
            New Quote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default QuoteBlock;
