import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { Repo } from "./pages/Repo";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/username/:reponame" element={<Repo />} />
      </Routes>

      {/* <Footer /> */}

      <GlobalStyles />
    </>
  );
}

export default App;
