import React, { useState } from "react";
import Input from "./KeyFrame/Input";
import styled, { ThemeProvider } from "styled-components";
const THEMES = {
    light: {
        backgroundColor: "#ffffff",
        color: "#000000",
    },
    dark: {
        backgroundColor: "#121212",
        color: "#ffffff",
    },
};

const Container = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
`;

const ThemePage = () => {
    const [theme, setTheme] = useState(THEMES["light"]);

    const handleSeletChange = (e) => {
        const nextThemeName = e.target.value;
        setTheme(THEMES[nextThemeName]);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <select onChange={handleSeletChange}>
                    <option value="light">라이트 모드</option>
                    <option value="dark">다크 모드</option>
                </select>
                <Input />
            </Container>
        </ThemeProvider>
    );
};

export default ThemePage;
