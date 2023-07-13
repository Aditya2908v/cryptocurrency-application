import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Homepage, Coin } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const App = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/coins/:id" element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
