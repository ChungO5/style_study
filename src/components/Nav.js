import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;

    a {
        text-decoration: none;
        color: #000000;
        &.active {
            color: #4693e8;
        }
    }
`;

const Nav = () => {
    return (
        <StyledNav>
            <NavLink to="/hellostyled">HelloSytled</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/dynamic">Dynamic</NavLink>
            <NavLink to="/input">Input</NavLink>
            <NavLink to="/inheritance">Inheritance</NavLink>
            <NavLink to="/searchInput">SearchInput</NavLink>
        </StyledNav>
    );
};

export default Nav;
