import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./navbar.module.css";
import "./navbar.css";

// the nav bar header of the page
function NavBar() {
  const [state, setState] = useState({
    title: "null",
    element: {
      title: "null",
      des: "null"
    }
  });
  return (
    <React.Fragment>
      {/* <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div> 

      navbar-light border-bottom justify-content-between
      */}

      {/* navbar-expand-sm */}
      <nav className="navbar        ">
        <Link className="navbar-brand " to="/">
          <div className="bbcslongan">
            <span className="textbbc">home</span>
          </div>
        </Link>
        <Link className="nav-item nav-link active signIn" to="SignIn">
          <div className="navbar-nav">
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
            <span>SignIn</span>
          </div>
        </Link>
        <Link className="nav-item nav-link active" to="mainApp">
          MainApp
        </Link>
        <Link className="nav-item nav-link active links link1" to="mainApp">
          {" "}
          news{" "}
        </Link>
        <Link className="nav-item nav-link active links link2" to="mainApp">
          {" "}
          sport{" "}
        </Link>
        <Link className="nav-item nav-link active links link3" to="mainApp">
          {" "}
          reel{" "}
        </Link>
        <Link className="nav-item nav-link active links link4" to="mainApp">
          {" "}
          worklife{" "}
        </Link>
        <Link className="nav-item nav-link active links link5" to="mainApp">
          {" "}
          travel{" "}
        </Link>
        <Link className="nav-item nav-link active links link6" to="mainApp">
          {" "}
          future{" "}
        </Link>
        <Link
          className="nav-item nav-link active links drowdown link7"
          to="mainApp"
        >
          more+
        </Link>
        <Link className="nav-item nav-link active" to="Blank5">
          empty
        </Link>
        <form className="searchinput" action="#">
          <input type="search" name="" id="" placeholder="search" />
          <button type="submit" className="search_button"></button>
        </form>
      </nav>
      <div className="more mhidden">
        <h2>more</h2>
        <div className="more moreelem1">culture</div>
        <div className="more moreelem2">music</div>
        <div className="more moreelem3">tv</div>
        <div className="more moreelem4">weather</div>
        <div className="more moreelem5">sounds</div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;
