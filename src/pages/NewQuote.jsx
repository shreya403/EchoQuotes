import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  let history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/Quotes");
    }
  }, [status, history]);
  const onAddQuote = (data) => {
    sendRequest(data);
  };
  return <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote} />;
};
export default NewQuote;
