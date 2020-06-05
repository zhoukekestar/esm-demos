import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "https://cdn.pika.dev/react@^16.13.1";
import ReactDOM from "https://cdn.pika.dev/react-dom@^16.13.1";
ReactDOM.render( /*#__PURE__*/React.createElement("p", null, "Hello Snowpack!"), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}