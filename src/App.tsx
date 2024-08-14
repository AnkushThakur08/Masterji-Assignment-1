import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomJokes from "./components/Jokes";
import CatListing from "./components/CatListing";
import PageNotFound from "./components/PageNotFound";
import UserCard from "./components/User";


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserCard />} / >
      <Route path="/random-user" element={<UserCard />} />
      <Route path="/random-jokes" element={<RandomJokes />} />
      <Route path="/cats-listing" element={<CatListing />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
    
    </BrowserRouter>

  )
}

export default App;