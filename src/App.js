import React from 'react';
import { hot } from 'react-hot-loader';

// separates into own bundle and doesn't load it until needed
const Warning = React.lazy(() => import('./Warning'));

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Incrementor</h1>
      <h2>Count: {count}</h2>
      {count > 10 && (
        <React.Suspense fallback={null}>
          <Warning>Max number exceeded!</Warning>
        </React.Suspense>
      )}
      <button disabled={count > 10} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

// hot reloading allows the local state to remain the unchanged during hot updates i.e code changes
export default hot(module)(App);
