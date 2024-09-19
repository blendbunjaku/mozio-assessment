import React from 'react';
import './App.scss';
import Homepage from "./pages/Homepage/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
