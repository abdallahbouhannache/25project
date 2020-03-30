import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./element.css";

//this component represents single img with txt

function Element(props) {
  const [state, setState] = useState({
    title: "topictitle",
    desc:
      "EU commission President Ursula von der Leyen warns talks with the uk may face another 'cliff edge'",
    imgContent: "./rom.jpg",
    elBg: "",
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
      classN: cls,
      imgContent: props.state.element.imgCont,
      elBg: props.state.element.bgcolor || props.state.element.bgEle
    });
  }, [props.state]);

  return (
    <React.Fragment>
      <Link
        style={{ background: `url(${state.elBg})` }}
        className={`${state.classN}`}
        to="/"
      >
        <img src={require(`${state.imgContent}`)} alt="" />
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
