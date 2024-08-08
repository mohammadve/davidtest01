import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Layout } from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
