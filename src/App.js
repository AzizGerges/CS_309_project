// import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mobails from "./pages/Mobails";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Laps from "./pages/Laps";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="Mobails" element={<Mobails />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Laps" element={<Laps />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Route exact path="/" Component={HomePage} />
//         <Route path="/Mobails" Component={Mobails} />
//         <Route path="/LoginPage" Component={LoginPage} />
//         <Route path="/SignUp" Component={SignUp} />
//         <Route path="/Laps" Component={Laps} />
//         <Route path="/Cart" Component={Cart} />
//       </BrowserRouter>
//     );
//   }
// }
