import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect } from "react";

const QuotesDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const param = useParams();

  useEffect(() => {
    sendRequest(param.quoteId);
  }, [sendRequest, param.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={`/Quotes/${param.quoteId}`} exact>
        <div className="centered">
          <Link to={`/Quotes/${param.quoteId}/comments`} className="btn--flat">
            View Comments
          </Link>
        </div>
      </Route>

      <Route path={`/Quotes/${param.quoteId}/comments`}>
        <Comments quoteId={param.quoteId} />
      </Route>
    </>
  );
};
export default QuotesDetail;
