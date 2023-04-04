// External API Endpoint : https://api.quotable.io

// TODO :
// - Create a dropdown component for the following operations :
//        - Update a record in local database using a form

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import QuoteBlock from "./components/quoteblock";
import DropMenu from "./components/DropDown";
import QuotesList from "./components/QuotesList";
import { Alert } from "react-bootstrap";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [quote, setQuote] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

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
        //console.log(backendData);
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
      {isSuccess && (
        <Alert
          variant="success"
          className="mt-3 mx-auto"
          style={{ width: "30rem" }}
        >
          <Alert.Heading className="text-center">
            Quote added successfully!
          </Alert.Heading>
        </Alert>
      )}
      <DropMenu
        handleClick={updateQuote}
        customQuotes={customQuotes}
        backendData={backendData}
        setIsSuccess={setIsSuccess}
      />
      <QuoteBlock update={updateQuote} quote={quote} />
      <QuotesList backendData={backendData} />
    </div>
  );
}

export default App;
