
import { define } from "hybrids";
import ReactCounter from "./ReactCounter";

// Define imported web component
define("antd-comp", ReactCounter);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
