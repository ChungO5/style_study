import React from "react";
import styled from "styled-components";
import Placeholder, { PlaceholderItem } from "./KeyFrame/Placeholder";

const A = styled(PlaceholderItem)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;
const B = styled(PlaceholderItem)`
    width: 400px;
`;
const C = styled(PlaceholderItem)`
    width: 200px;
`;

const KeyFrame = () => {
    return (
        <div>
            <Placeholder>
                <A />
                <B />
                <C />
            </Placeholder>
        </div>
    );
};

export default KeyFrame;
