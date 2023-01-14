// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        
      />
      <Routes>
        <Route
          path="/"
          element={<TextForm heading="Enter the Text to Analyze" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
