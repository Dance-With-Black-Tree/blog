import { useState, useEffect } from "react";
import { mockData } from "@mocks/data";

interface ISearchBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
}

export default function SearchBar({ onChange, searchValue }: ISearchBarProps) {
    return (
        <form>
            <input className={"w-full shadow shadow-md h-14 rounded-xl my-5 px-2 placeholder"} type="text" placeholder={"검색어를 입력하세요."} value={searchValue} onChange={onChange}></input>
        </form>
    );
}