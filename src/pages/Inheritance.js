import React from "react";
import styled from "styled-components";
import Button from "./Dynamic/Button";
import TermsOfService from "./Inheritance/TermsOfService";

const StyledTermsOfService = styled(TermsOfService)`
    background-color: #ededed;
    border-radius: 8px;
    padding: 16px;
    margin: 40px auto;
    width: 400px;
`;

const SubmitButton = styled(Button)`
    background-color: #de117d;
    display: block;
    margin: 0 auto;
    width: 200px;

    &:hover {
        background-color: #f5070f;
    }
`;

const Inheritance = () => {
    return (
        <div>
            <StyledTermsOfService />
            <SubmitButton>계속하기</SubmitButton>
        </div>
    );
};

export default Inheritance;
