import React, { Component } from "react";

class Counter extends Component {
  render() {
    // only use {} when you want to render JSX dynamically
    // console.log('this', this.props);#
    const { counter, onDecrement, onIncrease, onDelete } = this.props;

    return (
      <React.Fragment>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className={this.getBagde()}>
          <p style={{ fontSize: 30 }} style={{ fontSize: 30 }}>
            {this.formatCount()}
          </p>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => onIncrease(counter)}
          className="btn btn-secondary "
          style={{ borderRadius: 10 }}
        >
          <p style={{ fontSize: 20 }}>+</p>
        </button>
        {/*The reason we used an arrow function was because you need an arrow function to pass an argument */}
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-danger m-3"
          style={{ borderRadius: 10 }}
        >
          <p style={{ fontSize: 20 }}>-</p>
        </button>
        {/*The reason we used an arrow function was because you need an arrow function to pass an argument */}
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger m-2"
          style={{ borderRadius: 10 }}
        >
          <p style={{ fontSize: 20 }}>Delete</p>
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  // You can put any JavaScript value inside braces when using JSX
  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? <p>0</p> : <p>{value}</p>;
  }

  getBagde() {
    let classes = "badge btn ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }
}
export default Counter;
