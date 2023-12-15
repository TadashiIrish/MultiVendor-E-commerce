
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage , SignupPage} from "./Routes.js"
import "./App.css";

// Define the functional component
function App() {

  return (
    <BrowserRouter>
      
          <Routes>
            <Route
              path="/login"
              element={
               <LoginPage/>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/sign-up"
              element={
               <SignupPage/>
              }
            />
          </Routes>
          </BrowserRouter>
     
  );
}


export default App;
