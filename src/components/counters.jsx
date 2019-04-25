import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counter.map(item => (
          <Counter
            key={item.id}
            ondelete={this.props.ondelete}
            onincrease={this.props.onincrease}
            ondecrease={this.props.ondecrease}
            counter={item}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
