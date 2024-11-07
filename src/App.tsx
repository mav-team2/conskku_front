import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SelectPage from "./pages/select";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/select" element={<SelectPage />} />
    </Routes>
  );
}

export default App;
