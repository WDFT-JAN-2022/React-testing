import React from "react";

const Count = () => {
  //hook
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>COUNT: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
};

// class Count extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   increaseCount = () => {
//     // this.state.count++;
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Count: {this.state.count}</h3>
//         <button onClick={this.increaseCount}>Add</button>
//       </div>
//     );
//   }
// }

export default Count;
