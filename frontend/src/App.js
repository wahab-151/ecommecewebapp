import "./App.css";
import React from "react";
import ReduxProvider from "./redux/store";
import Routers from "./routes";

function App() {
  return (
    <ReduxProvider>
      <Routers />
    </ReduxProvider>
  );
}

export default App;
