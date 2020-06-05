import React, { useState, useEffect } from "https://cdn.pika.dev/react@^16.13.1";
import { Button, DatePicker } from "https://cdn.pika.dev/-/antd@v4.3.1-IhY8P1ybL5fQsevq1BOu/dist=es2019/antd.js";
export default function Counter(props) {
  const [count, setCount] = useState(props.count);
  useEffect(() => {
    if (props.count !== count) {
      setCount(props.count);
    }
  }, [props.count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: () => setCount(count + 1)
  }, "Count: ", count), /*#__PURE__*/React.createElement(DatePicker, null));
}