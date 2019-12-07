// Fix recorder
// Line 61, 62 need fix
//why can't pass to header this.props.countSoFar

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Header from "./components/layout/header";

class App extends React.Component {
  state = {
    box: [
      {
        id: 0,
        src: "./img/1.PNG",
        click: false
      },
      {
        id: 1,
        src: "./img/2.PNG",
        click: false
      },
      {
        id: 2,
        src: "./img/3.PNG",
        click: false
      },
      {
        id: 3,
        src: "./img/4.PNG",
        click: true
      },
      {
        id: 4,
        src: "./img/5.PNG",
        click: false
      },
      {
        id: 5,
        src: "./img/6.PNG",
        click: false
      }
    ],
    countState: 0,
    highestCount: 0
  };

  // randomOrder = el => {
  //   console.log(cal);
  //   console.log("count: " + count);
  //   return {
  //     flexWrap: count == 0 ? "flexWrap: wrap" : "flexWrap: wrapReverse"
  //   };
  // };

  updateClick(data) {
    var idUpdate = data.id;
    console.log(idUpdate);

    const newBox = (this.state.box[idUpdate].click = true);

    this.setState({
      countState: ++this.state.countState,
      box: newBox
    });

    // var updatedBox = box.map((element, indx) => {
    //   return { ...element, click: indx == index ? true : false };
    // });

    // this.setState({ box: boxUpdate });
    // console.log("id: " + data.id + " key: " + index);
    // console.log("click update to" + this.state.box[index].click);
  }

  alertFun = data => {
    alert("clicked already");

    // if (this.state.highestCount < this.state.countState) {
    //   console.log("the count is " + this.state.count);
    //   this.setState({ highestCount: this.state.countState });
    //   this.state.count = 0;
    //   console.log("highest count is " + this.state.highestCount);
    // }
  };

  //Trigger by click on card
  clicked = data => {
    this.state.box.forEach(element => {
      if (element.id === data.id) {
        element.click ? this.alertFun() : this.updateClick(element);
      }
      // return element;
    });

    // this.setState({
    //   countState: this.state.countState + 1,
    //   box: this.state.box.map(element => {
    //     if (element.id === data.id) {
    //       element.click ? alert("clicked already") : (element.click = true);
    //     }
    //     return element;
    //   })
    // });
  };

  render() {
    return (
      <>
        <Header countSoFar={this.state.countState} />
        <div className="parentcard">
          <h2>Current Count: {this.state.countState}</h2>
          <h2>Highest Count: </h2>
          <Card container={this.state.box} clicked={this.clicked} />
        </div>
      </>
    );
  }
}

export default App;
