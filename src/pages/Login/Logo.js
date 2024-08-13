import React from "react";
import LogoIcon from "./codeit.png";
import styled from "styled-components";
import Link from "./Link";

const SytledLogo = styled.div`
    text-align: center;
    img {
        width: 200px;
    }
    p {
        color: #848187;
        margin: 0;
    }
`;

const Logo = () => {
    return (
        <SytledLogo>
            <img src={LogoIcon} alt="로고" />
            <p>
                회원이 아니신가요? <Link href="/">회원가입 하기</Link>
            </p>
        </SytledLogo>
    );
};

export default Logo;
