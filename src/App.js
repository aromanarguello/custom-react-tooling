import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>Count: {this.state.count}</h2>
        <button
          onClick={() =>
            this.setState(state => ({
              count: state.count + 1
            }))
          }>
          +
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              count: state.count - 1
            }))
          }>
          -
        </button>
      </div>
    );
  }
}

// hot reloading allows the local state to remain the unchanged during hot updates i.e code changes
export default hot(module)(App);
