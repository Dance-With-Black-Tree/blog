import Link from "next/link";

import PostItem from "@components/post/PostItem";

import { mockData, iPost } from "@mocks/data";
interface IPostListProps {
    posts: iPost[],
    limit?: number
}

export default function PostList({posts, limit}: IPostListProps) {
    return <div className={"grid grid-cols-4 gap-4"}>
        {Object.values(posts).slice(0, limit || undefined).map((post, index) => {
            return (
                <Link href={`/post/${post.id}`} key={post.id}>
                    <PostItem post={post}/>
                </Link>
            )
        })}
    </div>;
}

