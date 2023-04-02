// External API Endpoint : https://api.quotable.io

// TODO :
// - Create a dropdown component for the following operations :
//        - Add custom quote to local database using a form
//        - Display table of all quotes in local database
//        - Delete a record from local database using a form
//        - Update a record in local database using a form
//        - Render QuoteBlock for a random quote from external API
import { useEffect, useState } from "react";
import "./App.css";
import QuoteBlock from "./components/quoteblock";
import "bootstrap/dist/css/bootstrap.min.css";
import DropMenu from "./components/DropDown";

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
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

  useEffect(() => {
    fetch("http://localhost:5000/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(backendData);
      });
  }, []);

  return (
    <div>
      <QuoteBlock update={updateQuote} quote={quote} />
      <DropMenu handleClick={updateQuote} />
    </div>
  );
}
