import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { define } from "https://cdn.pika.dev/hybrids@^4.1.9";
import ReactCounter from "./ReactCounter.js"; // Define imported web component

define("antd-comp", ReactCounter); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}