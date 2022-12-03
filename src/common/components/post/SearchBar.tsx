import { useState, useEffect } from "react";
import { mockData } from "@mocks/data";

interface ISearchBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
}

export default function SearchBar({ onChange, searchValue }: ISearchBarProps) {
    return (
        <form>
            <input type="text" value={searchValue} onChange={onChange}></input>
        </form>
    );
}