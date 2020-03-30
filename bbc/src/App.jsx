import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import NavBar from "./components/headerone";
import SimpleDiv from "./components/simplediv";
import ComposedDiv from "./components/composeddiv";
// import Grid from "./components/Grid";
// import Grid2 from "./components/Grid2";
// import Grid3 from "./components/Grid3";
// import Grid4 from "./components/Grid4";
// import Grid5 from "./components/Grid5";
// import Grid6 from "./components/Grid6";
// import Grid7 from "./components/Grid7";
// import Grid8 from "./components/Grid8";
// import Grid9 from "./components/Grid9";
// import Blank2 from "./components/Blank2";
// import Blank3 from "./components/Blank3";
// import Blank4 from "./components/Blank4";
// import Blank5 from "./components/Blank5";
import mainApp from "./components/mainApp";
import Weather from "./components/weather";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1250,
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
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="App" style={{}}>
          {/* THIS REQUIRES FINISHING THE WORK ON HERE  */}
          <SimpleDiv
            dispClss="Grid"
            sectionImg="./bg.jpg"
            listObjects={this.state.posts2}
          />
          <SimpleDiv
            dispClss="Flex"
            sectionImg=""
            listObjects={this.state.posts}
          />
          <SimpleDiv
            dispClss="Flex"
            sectionImg="./bg.jpg"
            listObjects={this.state.posts}
          />
          <Weather />
          <ComposedDiv listObjects={this.state.posts} />
        </div>
        {/*<SimpleDiv />
        <SimpleDiv />
        <SimpleDiv /> */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          {/* <Route path="/Blank" component={Blank} />
          <Route path="/Grid" component={Grid} />
          <Route path="/Grid2" component={Grid2} />
          <Route path="/Grid3" component={Grid3} />
          <Route path="/Grid4" component={Grid4} />
          <Route path="/Grid5" component={Grid5} />
          <Route path="/Grid6" component={Grid6} />
          <Route path="/Grid7" component={Grid7} />
          <Route path="/Grid8" component={Grid8} />
          <Route path="/Grid9" component={Grid9} />
          <Route path="/Blank2" component={Blank2} />
          <Route path="/Blank3" component={Blank3} />
          <Route path="/Blank4" component={Blank4} />
          <Route path="/Blank5" component={Blank5} /> */}
          <Route exact path="/" component={mainApp} />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
