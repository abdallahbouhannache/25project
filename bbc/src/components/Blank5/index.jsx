import React, { useState } from 'react';
import './simplediv.css';
import { Link } from "react-router-dom";


function sectionThree() {
  const [state, setState] = useState({
    sectionTitle: 'section', timeDate: "Sunday, 15 December", element: {
      title: 'topictitle',
      desc: 'justtext',
      imgsrc: './rom.jpg'
    }
  });

  return (

    <React.Fragment>
      <div className="sectionHeading">
        <span>{state.sectionTitle}</span>
        <span>{state.timeDate}</span>
      </div>
      <div className="sectionContainer">
        <Link className="news new0" to="/">
          <img src={require(`${state.element.imgsrc}`)} alt="" />
          <h2>{state.element.title}</h2>
          <p>{state.element.desc}</p>
          <a href="#">fffe</a>
        </Link>
        <Link className="news new1" to="/">
          <img src={require(`${state.element.imgsrc}`)} alt="" />
          <h2>{state.element.title}</h2>
          <p>{state.element.desc}</p>
        </Link>
        <Link className="news new2" to="/">
          <img src={require(`${state.element.imgsrc}`)} alt="" />
          <h2>{state.element.title}</h2>
          <p>{state.element.desc}</p>
        </Link>
        <Link className="news new3" to="/">
          <img src={require(`${state.element.imgsrc}`)} alt="" />
          <h2>{state.element.title}</h2>
          <p>{state.element.desc}</p>
        </Link>
        <Link className="news new4" to="/">
          <img src={require(`${state.element.imgsrc}`)} alt="" />
          <h2>{state.element.title}</h2>
          <p>{state.element.desc}</p>
        </Link>
      </div>

    </React.Fragment>

  )
};
export default sectionThree;
