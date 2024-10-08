import React from "react";
import styled from "styled-components";
import Button from "./Dynamic/Button";

const Container = styled.div`
    ${Button} {
        margin: 10px;
    }
`;

const Dynamic = () => {
    return (
        <Container>
            <h1>기본 버튼</h1>
            <Button size="small">small</Button>
            <Button size="medium">medium</Button>
            <Button size="large">large</Button>
            <h1>둥근 버튼</h1>
            <Button size="small" round>
                round small
            </Button>
            <Button size="medium" round>
                round medium
            </Button>
            <Button size="large" round>
                round large
            </Button>
        </Container>
    );
};

export default Dynamic;
