import { useEffect, useState } from "react";
import NextQuote from "./NextQuote";

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
      <h1>{quote.content}</h1>
      <NextQuote handleClick={updateQuote} />
    </>
  );
}

export default QuoteBlock;
