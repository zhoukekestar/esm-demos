import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <p>Hello Snowpack!</p>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
