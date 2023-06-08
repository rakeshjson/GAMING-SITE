import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart";
import Main from "./components/main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
