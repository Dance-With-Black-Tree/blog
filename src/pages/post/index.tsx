import Link from "next/link";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList"
import SearchBar from "@components/post/SearchBar";

import {mockData} from "@mocks/data"

export default function PostIndex() {
    return (
        <CommonLayout>
            <div>
                <h1 className="text-3xl font-bold">Posts</h1>
                <h2 className="text-xl font-light">검은나무가 써 놓은 글들</h2>
                <SearchBar onChange={()=>{}} searchWord={""}/>
                <div className="my-14">
                    <PostList />

                </div>
            </div>
        </CommonLayout>
    )
}
