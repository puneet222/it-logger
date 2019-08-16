import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

function App() {
  useEffect(() => {
    // initialize materialize
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
      </div>
    </div>
  );
}

export default App;
