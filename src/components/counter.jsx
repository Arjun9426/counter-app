import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <h3>item #{this.props.counter.id}</h3>
        <span style={{ fontSize: 15 }} className={this.getBadgeClass()}>
          {this.formatcount()}
        </span>

        <button
          onClick={() => this.props.onincrease(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increase
        </button>

        <button
          onClick={() => this.props.ondecrease(this.props.counter)}
          className="btn btn-tertiary btn-sm"
        >
          decrease
        </button>

        <button
          onClick={() => this.props.ondelete(this.props.counter)}
          className="btn btn-secondary btn-danger m-2"
        >
          delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classname = "badge m-3 badge-";
    if (this.props.counter.value === 0) classname += "warning";
    else classname += "primary";
    return classname;
  }
  formatcount() {
    let x = this.props.counter.value;
    if (x === 0) return "Zero  ";
    else return x;
  }
}
export default Counter;
