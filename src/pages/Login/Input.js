import React from "react";
import styled from "styled-components";

const Label = styled.label`
    color: #e1c6f7;
`;

const StyledInput = styled.input`
    border: none;
    display: block;
    outline: none;
    padding: 8px 0;
    border-bottom: 2px solid #eeeeee;
    width: 100%;

    &:focus {
        border-bottom: 2px solid #7760b4;
    }

    &::placeholder {
        color: #c4c5cd;
    }
`;

const Input = ({ children, text }) => {
    return (
        <Label>
            {children}
            <StyledInput placeholder={text} />
        </Label>
    );
};

export default Input;
