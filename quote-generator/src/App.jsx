// External API Endpoint : https://api.quotable.io

// TODO :
// - Create a dropdown component for the following operations :
//        - Delete a record from local database using a form
//        - Update a record in local database using a form

import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import axios from "axios";
import QuoteBlock from "./components/quoteblock";
import DropMenu from "./components/DropDown";
import QuotesList from "./components/QuotesList";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [quote, setQuote] = useState({});

  const updateQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  };

  const customQuotes = () => {
    axios
      .get("http://localhost:5000/api/quotes")
      .then((response) => {
        setBackendData(response.data);
        console.log(backendData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateQuote();
    customQuotes();
  }, []);

  return (
    <div>
      <h1 className="text-light">"Quote Generator"</h1>
      <DropMenu handleClick={updateQuote} customQuotes={customQuotes} />
      <QuoteBlock update={updateQuote} quote={quote} />
      <QuotesList backendData={backendData} />
    </div>
  );
}

export default App;
