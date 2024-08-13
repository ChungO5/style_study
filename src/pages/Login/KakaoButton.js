import React from "react";
import styled from "styled-components";
import Button from "./Button";
import kakaoIcon from "./kakao.svg";

const Icon = styled.img`
    height: 24px;
    width: 24px;
`;

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee500;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
        background-color: #fee500;
    }
    ${Icon} {
        margin-right: 8px;
    }
`;

const KakaoButton = ({ children }) => {
    return (
        <StyledButton>
            <Icon src={kakaoIcon} />
            {children}
        </StyledButton>
    );
};

export default KakaoButton;
