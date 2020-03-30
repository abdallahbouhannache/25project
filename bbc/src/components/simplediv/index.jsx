import React, { useState, useEffect } from "react";
import "./simplediv.css";
import { Link } from "react-router-dom";
import Element from "./element";

function SimpleDiv(props) {
  const [state, setState] = useState({
    sectionTitle: "sectionTitle",
    sectionProps: {
      bg: "#fff",
      FlexDirec: "row",
      imgSrc: "",
      bgtype: "s" /* either S:simple C:composed  */
    },
    timeDate: "Sunday, 15 December",
    id: 0,
    element: {
      title: "topictitle",
      desc: "justtext",
      bgEle: "./bg.jpg",
      imgCont: "./rom.jpg",
      bgcolor: "#fff"
    },
    DivClass: "",
    headingClss: "",
    containerClss: "sectionContainer",
    classElement: "news",
    lCompo: [
      {
        title: "topictitle",
        desc: "justtext",
        imgsrc: "./bg.jpg"
      },
      {
        title: "topictitle",
        desc: "justtext",
        imgsrc: "./bg.jpg"
      },
      {
        title: "topictitle",
        desc: "justtext",
        imgsrc: "./rom.jpg"
      },
      {
        title: "topictitle",
        desc: "justtext",
        imgsrc: "./rom.jpg"
      },
      {
        title: "topictitle",
        desc: "justtext",
        imgsrc: "./rom.jpg"
      }
    ],
    gridC: { Gtc: "fg", Gtr: "gh" },
    descGrid: "desc"
  });

  useEffect(() => {
    setState({
      ...state,
      sectionProps:
        props.dispClss == "Flex"
          ? {
              bg: "#fff",
              FlexDirec: "column",
              imgSrc: props.sectionImg || "",
              bgtype: "s"
            }
          : {
              bg: "#fff",
              FlexDirec: "column",
              imgSrc: props.sectionImg || "",
              bgtype: "s"
            },
      DivClass: "SimpleDiv " + props.dispClss,
      headingClss: "sectionHeading " + props.dispClss,
      containerClss: "sectionContainer " + props.dispClss /* == "Flex" */,
      classElement: "news " + props.dispClss + " " + props.descGrid,
      // ? "sectionContainer" + " FlexCompo"
      // : "sectionContainer" + " GridCompo",
      lCompo: props.listObjects,
      gridC: props.gridC || state.gridC,
      descGrid: props.descGrid || "desc"
    });
  }, [props]);
  // var x = props.sectionImg || "./sky.jpg";

  if (!state.lCompo) {
    return <React.Fragment>null</React.Fragment>;
  }
  if (state.lCompo.length == 1) {
    return (
      <React.Fragment>
        <Element state={state} classN={state.classElement} id="0" />
      </React.Fragment>
    );
  } else {
    // console.log(state.sectionProps);
    return (
      <div
        className={state.DivClass}
        style={{
          backgroundImage: `url(${state.sectionProps.imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
          // backgroundPosition: "center",
          // backgroundSize: "cover"
          // backgroundColor: state.sectionProps.bg
        }}
      >
        <div className={state.headingClss}>
          <span>{state.sectionTitle}</span>
          <span>{state.timeDate}</span>
        </div>

        {/* in here we structure the element depending on the number of elements*/}
        <div className={`${state.containerClss}`}>
          {state.lCompo.map((item, index) => (
            <Element state={state} classN={state.classElement} id={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default SimpleDiv;
