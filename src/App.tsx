import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SelectPage from "./pages/select";
import ResultPage from "./pages/result";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/select" element={<SelectPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
