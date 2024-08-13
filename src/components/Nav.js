import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/hellostyled">HelloSytled</Link>
            <Link to="/form">form</Link>
            <Link to="/dynamic">dynamic</Link>
            <Link to="/input">input</Link>
        </div>
    );
};

export default Nav;
