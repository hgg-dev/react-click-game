//line 45 - put style in Parent Card to trigger state change

import React from "react";
import "./App.css";
import Card from "./components/card";
import Header from "./components/layout/header";
import Container from "./components/container";

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
        click: false
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
    highestCount: 0,
    sorted: false
  };

  sortCard() {
    this.setState({ sorted: !this.state.sorted });
    console.log(this.state.sorted);
  }

  updateClick(data) {
    var idUpdate = data.id;
    const newBox = [...this.state.box];
    newBox[idUpdate].click = true;
    this.setState({
      countState: this.state.countState + 1,
      box: newBox
    });
  }

  alertFun = data => {
    alert("clicked already");
  };

  //Trigger by click on card
  clicked = data => {
    this.sortCard();
    console.log(data);
    this.state.box.forEach(element => {
      if (element.id === data.id) {
        element.click ? this.alertFun() : this.updateClick(element);
      }
    });
  };

  render() {
    return (
      <>
        <Header countSoFar={this.state} />
        <div className="background">
          {/* <div className="parentcard" style={this.sortCardStyle()}> */}
          <Container Styling={this.state.sorted}>
            {<Card container={this.state.box} clicked={this.clicked} />}
          </Container>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default App;
