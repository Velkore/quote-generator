import { useEffect, useState } from "react";
import NextQuote from "./NextQuote";
import Card from "react-bootstrap/Card";

function QuoteBlock() {
  const [quote, setQuote] = useState({});

  const updateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data);
      });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <>
      <Card
        className="card text-bg-dark bg-gradient mt-5 mx-auto p-3 text-center"
        style={{ width: "50rem" }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{quote.content}</p>
            <footer className="blockquote-footer mt-2">
              <cite className="text-light" title="Source Title">
                {quote.author}
              </cite>
            </footer>
          </blockquote>
          <NextQuote handleClick={updateQuote} />
        </Card.Body>
      </Card>
    </>
  );
}

export default QuoteBlock;
