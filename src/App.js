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
import { createGlobalStyle, ThemeProvider } from "styled-components";
import KeyFrame from "./pages/KeyFrame";
import ThemePage from "./pages/ThemePage";

const THEMES = {
    light: {
        backgroundColor: "#ffffff",
        color: "#000000",
    },
    dark: {
        backgroundColor: "#03040c",
        color: "#ffffff",
    },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background-color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;

const App = () => {
    return (
        <ThemeProvider theme={THEMES["light"]}>
            <BrowserRouter>
                <GlobalStyle />
                <Nav />
                <Routes>
                    <Route path="/hellostyled" element={<HelloSytled />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/dynamic" element={<Dynamic />} />
                    <Route path="/input" element={<InputComponent />} />
                    <Route path="/inheritance" element={<Inheritance />} />
                    <Route path="/searchInput" element={<SearchPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/keyframe" element={<KeyFrame />} />
                    <Route path="/theme" element={<ThemePage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
