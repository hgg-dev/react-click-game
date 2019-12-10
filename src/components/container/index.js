import React from "react";
import "./container.css";

class Container extends React.Component {
  // sortCardStyle() {
  //   return { flexWrap: this.props.Styling ? "wrap" : "reverseWrap" };
  // }

  render() {
    return (
      <div
        className="parentcard"
        style={{ flexWrap: this.props.Styling ? "wrap" : "wrap-reverse" }}
      >
        {this.props.children}
      </div>
    );
  }
}

// Argument required

export default Container;

// PropTry = props => {
//   console.log("props works: " + props.name);
// };
