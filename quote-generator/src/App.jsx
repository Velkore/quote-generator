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

  const randomQuote = async () => {
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
    randomQuote();
    customQuotes();
  }, []);

  return (
    <div>
      <h2 className="title text-center">"QuoteMe"</h2>
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
        handleClick={randomQuote}
        customQuotes={customQuotes}
        backendData={backendData}
        setIsSuccess={setIsSuccess}
      />
      <QuoteBlock update={randomQuote} quote={quote} />
      <QuotesList backendData={backendData} />
    </div>
  );
}

export default App;
