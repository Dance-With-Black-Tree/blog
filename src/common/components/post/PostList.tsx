import Link from "next/link";

import PostItem from "@components/post/PostItem";

import { mockData, iPost } from "@mocks/data";

interface IPostListProps {
    posts: iPost[]
}

export default function PostList({posts}: IPostListProps) {
    return <div className="grid-cols-4">
        {Object.values(posts).map((post, _index)=>{
            return (
                <Link href={`/post/${post.id}`} key={post.id}>
                    <PostItem post={post}/>
                </Link>)
        })}
    </div>
}
