import "./styles/index.scss";

import Home from "./components/Home/Home";

import Detail from "./components/Home/routes/Detail";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
