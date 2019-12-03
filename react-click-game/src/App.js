// Fix recorder
// Check click again than reset game

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Header from "./components/layout/header";

var count = 0;
var cal = count % 2;

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
    ]
  };

  // randomOrder = el => {
  //   console.log(cal);
  //   console.log("count: " + count);
  //   return {
  //     flexWrap: count == 0 ? "flexWrap: wrap" : "flexWrap: wrapReverse"
  //   };
  // };

  clicked = data => {
    console.log("props" + this.props);
    count++;
    this.setState({
      box: this.state.box.map(check => {
        if (check.id === data) {
          // Change click to not the same value
          check.click = !check.click;
          this.randomOrder();
        }
        return check;
      })
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="parentcard">
          <h2>Count: {count}</h2>
          <Card container={this.state.box} clicked={this.clicked} />
        </div>
      </>
    );
  }
}

export default App;
