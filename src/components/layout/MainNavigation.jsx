import styles from "./MainNavigation.module.css";

// import { Link } from "react-router";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>EchoQuotes</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/Quotes" activeClassName={styles.active}>
                All Qoutes
              </NavLink>
            </li>
            <li>
              <NavLink to="/newQuote" activeClassName={styles.active}>
                Add a Qoute
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
