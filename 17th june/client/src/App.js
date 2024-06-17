import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Choose from "./Components/Choose";
import NgoForm from "./Components/NgoForm";
import UserFormSignup from "./Components/UserFormSignup";
import UserFormLogin from "./Components/UserFormLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/choose" element={<Choose/>}></Route>
        <Route path="/userSignup" element={<UserFormSignup/>}></Route>
        <Route path="/userLogin" element={<UserFormLogin/>}></Route>
        <Route path="/ngoLogin" element={<NgoForm/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
