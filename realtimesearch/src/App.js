import React, { Component } from 'react';
import './App.css';
import Heade from './comp/heade';
import Panldis from './comp/paneldisplay';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dataresult: "", value: "" };
    var jsondata = "null";
    var arraydata = "null";
    this.f = this.f.bind(this);
  }

  componentWillMount() {
    this.jsondata = require('./rss/datasets/jews.json');
    this.arraydata = Array.from(Object.entries(this.jsondata))[0][1];
    this.setState({ dataresult: this.arraydata, value: "" });
  }

  f = (e) => {
    //from json we compare and return lines that match
    /* let temps = ;
     */

    let v = String(e.target.value).toLowerCase();
    let temp = this.arraydata.filter((x) => x.toLowerCase().includes(v) == true);


    this.setState({ dataresult: temp, value: e.target.value });

  }
  render() {

    return (
      <div className="App">
        <Heade />
        <div id="srch">
          <h3>Search :</h3>
          <input type="text" id="searchP"
            onChange={this.f} ref="ins" />
        </div>
        <Panldis searchdata={this.state.dataresult} />

      </div>
    );
  }
}

export default App;