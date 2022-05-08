import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chart from "./components/Chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Chart />
            </Route>
          </Switch>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
