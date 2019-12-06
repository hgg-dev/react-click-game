// Fix recorder
// Check click again than reset game
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
        id: 1,
        src: "./img/1.PNG",
        click: false
      },
      {
        id: 2,
        src: "./img/2.PNG",
        click: false
      },
      {
        id: 3,
        src: "./img/3.PNG",
        click: false
      },
      {
        id: 4,
        src: "./img/4.PNG",
        click: true
      },
      {
        id: 5,
        src: "./img/5.PNG",
        click: false
      },
      {
        id: 6,
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

  updateClick(data, index) {
    this.state.countState += 1;

    this.setState({
      box: (this.state.box[index].click = true)
    });
    var updatedBox = box.map((element, indx) => {
      return { ...element, click: indx == index ? true : false };
    });

    this.setState({ box: boxUpdate });
    console.log("id: " + data.id + " key: " + index);
    console.log("click update to" + this.state.box[index].click);
  }

  clicked = data => {
    var alertFun = data => {
      alert("clicked already");

      // if (this.state.highestCount < this.state.countState) {
      //   console.log("the count is " + this.state.count);
      //   this.setState({ highestCount: this.state.countState });
      //   this.state.count = 0;
      //   console.log("highest count is " + this.state.highestCount);
      // }
    };

    this.state.box.forEach((element, index) => {
      if (element.id === data.id) {
        element.click ? alertFun() : updateClick(element, index);
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
