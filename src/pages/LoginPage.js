import React from "react";
import Button from "./Login/Button";
import styled from "styled-components";
import KakaoButton from "./Login/KakaoButton";
import Input from "./Login/Input";
import Logo from "./Login/Logo";

const Container = styled.div`
    width: 400px;
    form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    margin: 50px auto;
`;

const LoginPage = () => {
    return (
        <Container>
            <form>
                <Logo />
                <Input text="이메일">이메일</Input>
                <Input text="비밀번호">비밀번호</Input>
                <Button loading>로그인 하기</Button>
                <KakaoButton>카카오 로그인</KakaoButton>
            </form>
        </Container>
    );
};

export default LoginPage;
