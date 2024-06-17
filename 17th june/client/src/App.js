import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Choose from "./Components/Choose";
import UserForm from "./Components/UserForm";
import NgoForm from "./Components/NgoForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/choose" element={<Choose/>}></Route>
        <Route path="/user" element={<UserForm/>}></Route>
        <Route path="/ngo" element={<NgoForm/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
