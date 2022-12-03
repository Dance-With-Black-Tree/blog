import Link from "next/link";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList"
import SearchBar from "@components/post/SearchBar";

import {mockData} from "@mocks/data"

export default function PostIndex() {
    return (
        <CommonLayout>
            <div>
                <h1>POSTS</h1>
                <h2>여기 설명</h2>
                <SearchBar/>
                <div>
                    글목록
                    <PostList/>

                </div>
            </div>
        </CommonLayout>
    )
}
