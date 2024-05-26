import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuotesDetail from "./pages/QuotesDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Quotes" />
        </Route>
        <Route exact path="/Quotes">
          <AllQuotes />
        </Route>
        <Route path="/Quotes/:quoteId">
          <QuotesDetail />
        </Route>
        <Route path="/newQuote">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
