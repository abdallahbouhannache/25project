import React, { Component } from "react";
// import classnames from "classnames";
// import WarningMessage from "../WarningMessage";
// import MasterDetailPage from "./MasterDetailPage";
// import MasterDetailSideBarTab from "./MasterDetailSideBarTab";
// import GreyAvatar from "../../images/GreyAvatar.svg";
// import styles from "./masterdetail.module.css";
// import CONSTANTS from "../../constants";

export default class Master_Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentDisplayTabIndex: 0,
      // masterDetailText: [
      //   {
      //     shortDescription: "",
      //     longDescription: "",
      //     title: "",
      //     status: "",
      //     shipTo: "",
      //     orderTotal: 0.0,
      //     orderDate: "",
      //     id: 0
      //   }
      // ]
    };
    // this.handleDisplayTabClick = this.handleDisplayTabClick.bind(this);
    // this.handleWarningClose = this.handleWarningClose.bind(this);
  }

  // Get the sample data from the back end
  componentDidMount() {
    // fetch(CONSTANTS.ENDPOINT.MASTERDETAIL)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then(result => {
    //     this.setState({ masterDetailText: result });
    //   })
    //   .catch(error =>
    //     this.setState({
    //       WarningMessageOpen: true,
    //       WarningMessageText: `${
    //         CONSTANTS.ERROR_MESSAGE.MASTERDETAIL_GET
    //         } ${error}`
    //     })
    //   );
  }

  // handleWarningClose() {
  //   this.setState({
  //     WarningMessageOpen: false,
  //     WarningMessageText: ""
  //   });
  // }

  // handleDisplayTabClick(id) {
  //   this.setState({ currentDisplayTabIndex: id });
  // }

  render() {
    // const {
    //   masterDetailText,
    //   currentDisplayTabIndex,
    //   WarningMessageOpen,
    //   WarningMessageText
    // } = this.state;
    return (
      <div className="main">

      </div>
    );
  }
}
