import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList";
import SearchBar from "@components/post/SearchBar";

import { mockData, iPost } from "@mocks/data";

export default function PostIndex() {
    const [searchValue, setSearchValue] = useState<string>("");

    const searchedPostData = mockData.filter(data => data.title.includes(searchValue))
    
    const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    };

    return (
        <CommonLayout>
            <div>
                <h1 className="text-3xl font-bold">Posts</h1>
                <h2 className="text-xl font-light">검은나무가 써 놓은 글들</h2>
                <SearchBar
                    onChange={handleChangeSearchValue}
                    searchValue={searchValue}
                />
                <div className="my-14">
                    <PostList posts={searchedPostData}/>
                </div>
            </div>
        </CommonLayout>
    );
}
