import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloSytled from "./pages/HelloSytled";
import Nav from "./components/Nav";
import Form from "./pages/Form";
import Dynamic from "./pages/Dynamic";
import InputComponent from "./pages/InputComponent";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/hellostyled" element={<HelloSytled />} />
                <Route path="/form" element={<Form />} />
                <Route path="/dynamic" element={<Dynamic />} />
                <Route path="/input" element={<InputComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
