import React, { Component } from "react";
import "./weather.css";
// import classnames from "classnames";
// import GridComponent from "./GridComponent";
// import WarningMessage from "../WarningMessage";
// import GreyBox from "../../images/GreyBox.svg";
// import styles from "./grid.module.css";
// import CONSTANTS from "../../constants";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc:
        "https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/1.gif"
    };
  }

  render() {
    return (
      <div className="weathContainer">
        <div className="weather">
          <div className="headWeath">
            <h2>location</h2>
            <button
              id="editlocation"
              className="btn btn-light editLocationBtn "
            >
              edit
            </button>
          </div>

          <div className="searchC">
            <input type="text" name="" id="" />
          </div>

          <ul className="weatherDisplay">
            <li className="day day1">
              <img src={this.state.imgSrc} alt="" />
              <div className="degree">
                <h3 class="forecast--day">Sat</h3>
                <p class="forecast--high">34°C</p>
                <p class="forecast--low">21°C</p>
              </div>
            </li>
            <li className="day day2">
              <img src={this.state.imgSrc} alt="" />
              <div className="degree">
                <h3 class="forecast--day">Sat</h3>
                <p class="forecast--high">34°C</p>
                <p class="forecast--low">21°C</p>
              </div>
            </li>
            <li className="day day3">
              <img src={this.state.imgSrc} alt="" />
              <div className="degree">
                <h3 class="forecast--day">Sat</h3>
                <p class="forecast--high">34°C</p>
                <p class="forecast--low">21°C</p>
              </div>
            </li>
            <li className="day day4">
              <img src={this.state.imgSrc} alt="" />
              <div className="degree">
                <h3 class="forecast--day">Sat</h3>
                <p class="forecast--high">34°C</p>
                <p class="forecast--low">21°C</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Weather;
