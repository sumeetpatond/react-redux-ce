/* eslint-disable require-jsdoc */

import "./App.css";
import Counter1 from "./component/Counter1";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Counter2 from "./component/Counter2";
import Counter3 from "./component/Counter3";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter1 />
        <Counter2 />
        <Counter3 />
      </Provider>
    </div>
  );
}

export default App;
