import { render } from "hybrids";

import React from "react";
import ReactDOM from "react-dom";

// Simple React component
import Counter from "./Counter";

// This function creates update callback, which uses react-dom
// to render content in shadowRoot of the custom element.
// For production use it should support ShadyCSS polyfill
// to properly distribute styles in custom element rendered by React
function reactify(fn) {
  return render(
    host => {
      const Component = fn(host);
      return (host, target) => ReactDOM.render(Component, target);
    },
    { shadowRoot: true }
  );
}

export default {
  count: 0,
  render: reactify(({ count }) => (
    <div>
      <link rel="stylesheet" href="https://gw.alipayobjects.com/os/lib/antd/4.3.1/dist/antd.min.css"></link>
      <Counter count={count} />
    </div>
  ))
};
