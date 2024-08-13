import styled from "styled-components";
import Input from "../InputComponent/Input";
import search from "./search.png";

const SearchInput = styled(Input)`
    background-image: url(${search});
    background-position: 12px 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-left: 40px;
`;

export default SearchInput;
