import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import Input from "./InputComponent/Input";

const SearchPage = () => {
    return (
        <div>
            <h2>Input</h2>
            <Input />
            <h2>SearchInput</h2>
            <SearchInput />
        </div>
    );
};

export default SearchPage;
