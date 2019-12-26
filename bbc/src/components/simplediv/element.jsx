import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./element.css";

//this component represents single img with txt

function Element(props) {
  const [state, setState] = useState({
    title: "topictitle",
    desc:
      "EU commission President Ursula von der Leyen warns talks with the uk may face another 'cliff edge'",
    imgsrc: "./rom.jpg",
    classN: "",
    id: 0,
    updated: false,
    sLink: "EUROPE"
  });

  // var f = !state.updated
  //   ? (props.updateId(), (state.updated = true))
  //   : console.log("skipped");

  useEffect(() => {
    // if (state.updated == false) {
    //   props.updateId();
    //   state.updated = true;
    // }
    state.id = props.id;
    let cls = props.classN + " new" + state.id;
    setState({
      ...state,
      classN: cls
    });
  }, [props.state.classElement]);

  return (
    <React.Fragment>
      <Link className={`${state.classN}`} to="/">
        <img src={require(`${state.imgsrc}`)} alt="" />
        <div className={props.state.descGrid}>
          <h3>{state.title}</h3>
          <p>{state.desc}</p>
          <a className="tag" href="#">
            {state.sLink}
          </a>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default Element;
