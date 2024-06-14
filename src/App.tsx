import "./styles/index.scss";

import Home from "./components/Home/Home";

import Detail from "./components/Home/routes/Detail";

import Header from "./components/Home/Header/Header";

import Explore from "./components/Home/Explore/Explore";

import Account from "./components/Home/Account/Account";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataProvider } from "./components/Home/Сontext/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details" element={<Detail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
