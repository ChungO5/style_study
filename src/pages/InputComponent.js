import React from "react";
import styled from "styled-components";
import Input from "./InputComponent/Input";

const Container = styled.div`
    ${Input} {
        margin: 8px;
    }
`;

const InputComponent = () => {
    return (
        <Container>
            <h2>Size</h2>
            <Input size="small" />
            <Input size="medium" />
            <Input size="large" />
            <h2>Round</h2>
            <Input round />
            <h2>Error</h2>
            <Input error />
        </Container>
    );
};

export default InputComponent;
