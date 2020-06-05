import React, { useState, useEffect } from "react";
import { Button, DatePicker } from "antd"

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    if (props.count !== count) {
      setCount(props.count);
    }
  }, [props.count]);

  return (
    <>
      <Button type="primary" onClick={() => setCount(count + 1)}>Count: {count}</Button>
      <DatePicker />
    </>
  );
}
