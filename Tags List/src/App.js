import React from "react";

import { Provider } from "react-redux";
import store from "./Redux/store";

import "./App.css";

import TagList from "./components/TagList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TagList />
      </div>
    </Provider>
  );
};

export default App;
