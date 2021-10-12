/* eslint-disable require-jsdoc */

import "./App.css";
import Counter1 from "./component/Counter1";
import { Provider } from "react-redux";
import store from "./redux/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter1 />
      </Provider>
    </div>
  );
}

export default App;
