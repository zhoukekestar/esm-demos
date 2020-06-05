import { render } from "https://cdn.pika.dev/hybrids@^4.1.9";
import React from "https://cdn.pika.dev/react@^16.13.1";
import ReactDOM from "https://cdn.pika.dev/react-dom@^16.13.1"; // Simple React component

import Counter from "./Counter.js"; // This function creates update callback, which uses react-dom
// to render content in shadowRoot of the custom element.
// For production use it should support ShadyCSS polyfill
// to properly distribute styles in custom element rendered by React

function reactify(fn) {
  return render(host => {
    const Component = fn(host);
    return (host, target) => ReactDOM.render(Component, target);
  }, {
    shadowRoot: true
  });
}

export default {
  count: 0,
  render: reactify(({
    count
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://gw.alipayobjects.com/os/lib/antd/4.3.1/dist/antd.min.css"
  }), /*#__PURE__*/React.createElement(Counter, {
    count: count
  })))
};