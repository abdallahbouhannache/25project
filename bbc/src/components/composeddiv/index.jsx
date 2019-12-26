import SimpleDiv from "./../simplediv";
import React, { Component } from "react";
import "./composedDiv.css";
import Element from "./../simplediv/element";

class ComposedDiv extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
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
        },
        {
          title: "topictitle",
          desc: "justtext",
          imgsrc: "./rom.jpg"
        }
      ],
      posts2: [
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
      posts7: [
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
        },
        {
          title: "topictitle",
          desc: "justtext",
          imgsrc: "./rom.jpg"
        }
      ],
      gridconf: {
        Gtc: "170px 170px 170px" /* grid template column */,
        Gtr: "170px 170px 170px 170px" /* grid template rows */
      }
    };
  }
  render() {
    return (
      <div className="composed">
        {/* simple div GridTYPE left grid  */}
        {/* <Element state={{}} classN={" news Grid  "} id={0} /> */}
        <SimpleDiv
          dispClss="GridCompo"
          descGrid="GCD" /* GridCompoDesc */
          listObjects={this.state.posts7}
        />

        {/* simple div FlexTYPE right side bar  section */}
        <SimpleDiv
          dispClss="FlexCompo"
          FlexDirec="column"
          descGrid=""
          listObjects={this.state.posts2}
        />
      </div>
    );
  }
}

export default ComposedDiv;
