import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomJokes from "./components/jokes";
import PageNotFound from "./components/PageNotFound";
import UserCard from "./components/user";
import Cat from "./components/cat";


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserCard />} / >
      <Route path="/random-user" element={<UserCard />} />
      <Route path="/random-jokes" element={<RandomJokes />} />
      <Route path="/cats-listing" element={<Cat />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
    
    </BrowserRouter>

  )
}

export default App;