import classes from "./NoQuotesFound.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <NavLink to="/newQuote" className="btn">
        Add a Qoute
      </NavLink>
    </div>
  );
};

export default NoQuotesFound;
