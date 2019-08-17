import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import ListTechModal from "./components/techs/ListTechModal";

function App() {
  useEffect(() => {
    // initialize materialize
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <ListTechModal />
        </div>
      </div>
    </Provider>
  );
}

export default App;
