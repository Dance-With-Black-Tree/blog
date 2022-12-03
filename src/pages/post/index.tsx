import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList";
import SearchBar from "@components/post/SearchBar";

import { mockData, iPost } from "@mocks/data";

export default function PostIndex() {
    const [searchValue, setSearchValue] = useState<string>("");

    const postData: iPost[] = Object.values(mockData)
    const searchedPostData = postData.filter(data => data.title.includes(searchValue))
    
    const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    };

    return (
        <CommonLayout>
            <div>
                <h1>POSTS</h1>
                <h2>여기 설명</h2>
                <SearchBar
                    onChange={handleChangeSearchValue}
                    searchValue={searchValue}
                />
                <PostList posts={searchedPostData} />
            </div>
        </CommonLayout>
    );
}
