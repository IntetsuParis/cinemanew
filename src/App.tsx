import "./styles/index.scss";

import React, { useEffect } from "react";
import Home from "./components/Home/Home";

import Detail from "./components/Detail/Detail";

import Header from "./components/Header/Header";

import Explore from "./components/Explore/Explore";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bounce, toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Account from "./components/Account/Account";
import { Wallet } from "./components/WalletContext/Wallet";
import { useWallet } from "@solana/wallet-adapter-react";
function App() {
  const { connect } = useWallet();

  useEffect(() => {
    toast(
      "Please, use vpn to use the website(because api is not loading, i dont know why ) ! ",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    connect().catch(() => {
      // Handle the error if the connection fails
      console.error("Failed to connect wallet");
    });
  }, [connect]);

  return (
    <Wallet>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details" element={<Detail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Wallet>
  );
}

export default App;
