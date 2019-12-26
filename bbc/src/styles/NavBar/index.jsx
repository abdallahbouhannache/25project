import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          bbc
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="Blank">
            Blank
          </Link>
          <Link className="nav-item nav-link active" to="Grid">
            Grid
          </Link>
          <Link className="nav-item nav-link active" to="Grid2">
            Grid2
          </Link>
          <Link className="nav-item nav-link active" to="Grid3">
            Grid3
          </Link>
          <Link className="nav-item nav-link active" to="Grid4">
            Grid4
          </Link>
          <Link className="nav-item nav-link active" to="Grid5">
            Grid5
          </Link>
          <Link className="nav-item nav-link active" to="Grid6">
            Grid6
          </Link>
          <Link className="nav-item nav-link active" to="Grid7">
            Grid7
          </Link>
          <Link className="nav-item nav-link active" to="Grid8">
            Grid8
          </Link>
          <Link className="nav-item nav-link active" to="Grid9">
            Grid9
          </Link>
          <Link className="nav-item nav-link active" to="Master_Detail">
            Master_Detail
          </Link>
          <Link className="nav-item nav-link active" to="Blank2">
            Blank2
          </Link>
          <Link className="nav-item nav-link active" to="Blank3">
            Blank3
          </Link>
          <Link className="nav-item nav-link active" to="Blank4">
            Blank4
          </Link>
          <Link className="nav-item nav-link active" to="Blank5">
            Blank5
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
