import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloSytled from "./pages/HelloSytled";
import Nav from "./components/Nav";
import Form from "./pages/Form";
import Dynamic from "./pages/Dynamic";
import InputComponent from "./pages/InputComponent";
import Inheritance from "./pages/Inheritance";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/hellostyled" element={<HelloSytled />} />
                <Route path="/form" element={<Form />} />
                <Route path="/dynamic" element={<Dynamic />} />
                <Route path="/input" element={<InputComponent />} />
                <Route path="/inheritance" element={<Inheritance />} />
                <Route path="/searchInput" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
