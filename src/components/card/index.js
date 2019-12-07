import React from "react";
import "./card.css";
import PropTypes from "prop-types";

class Card extends React.Component {
  cardColor = el => {
    return {
      border: this.props.container[el].click
        ? "1.5px solid red"
        : "1.5px solid grey"
    };
  };

  render() {
    console.log("this.props.container", this.props.container);
    return this.props.container.map((el, index) => (
      <div
        style={this.cardColor(index)}
        className="card"
        key={el.id}
        onClick={() => this.props.clicked(el)}
        // alternative this.props.clicked.bind(this, el.id)
      >
        <img src={el.src} alt={el.id} />
      </div>
    ));
  }
}

// Argument required
Card.protoTypes = {
  container: PropTypes.array.isRequired
};

export default Card;

// PropTry = props => {
//   console.log("props works: " + props.name);
// };
