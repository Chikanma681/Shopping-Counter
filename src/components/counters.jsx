import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm"
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 20,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDecrement={this.props.onDecrement}
            counter={counter}
            onIncrease={this.props.onIncrease}
            onReset={this.props.onReset}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
