import React from "react";
import styled from "styled-components";

const Icon = styled.img`
    width: 16px;
    height: 16px;
`;

const StyledButton = styled.button`
    background-color: #6750a4;
    border: none;
    color: #ffffff;
    padding: 16px;

    // $ 선택자 : 자손 결합자(& 생략 가능)
    ${Icon} {
        margin-right: 4px;
    }

    // & 선택자 : 부모 선택자를 의미
    &:hover,
    &:active {
        background-color: #463770;
        // Nesting은 여러 겹으로 사용 가능
        ${Icon} {
            opacity: 0.2;
        }
    }
`;

const Button = ({ children, ...buttonProps }) => {
    return (
        <StyledButton {...buttonProps}>
            <Icon src={require("./nail.png")} alt="nail icon" />
            {children}
        </StyledButton>
    );
};

export default Button;
