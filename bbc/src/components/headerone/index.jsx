import React, { useState } from 'react';
// import "./../../styles/Blank.css";

function NavBar() {
  const [state, setState] = useState({
    title: 'null', element: {
      title: 'null',
      des: 'null'
    }
  });

  return (
    <React.Fragment>
      <div className="bbcslongan">
        <span className="le lettr1">b</span>
        <span className="le lettr2">b</span>
        <span className="le lettr3">c</span>
      </div>
      <div class="signIn">
        <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <input type="button" className="links link1" value="news" />
      <input type="button" className="links link2" value="sport" />
      <input type="button" className="links link3" value="reel" />
      <input type="button" className="links link4" value="worklife" />
      <input type="button" className="links link5" value="travel" />
      <input type="button" className="links link6" value="future" />
      <input type="button" className="links drowdown link7" value="more">
        <h2>more</h2>
        <div className="more moreelem1">culture</div>
        <div className="more moreelem2">music</div>
        <div className="more moreelem3">tv</div>
        <div className="more moreelem4">weather</div>
        <div className="more moreelem5">sounds</div>
      </input>

      <form className="searchinput" action="#">
        <input type="search" name="" id="" placeholder="search" />
        <i class="fa fa-search" aria-hidden="true"></i>
      </form>

    </React.Fragment>
  )
};
export default NavBar;
