import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomUser from "./components/RandomUser";
import RandomJokes from "./components/RandomJokes";
import CatListing from "./components/CatListing";
import PageNotFound from "./components/PageNotFound";


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RandomUser />} / >
      <Route path="/random-user" element={<RandomUser />} />
      <Route path="/random-jokes" element={<RandomJokes />} />
      <Route path="/cats-listing" element={<CatListing />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
    
    </BrowserRouter>

  )
}

export default App;