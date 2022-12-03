import {iPost, mockData} from "@mocks/data"
import Link from "next/link";

interface IPostItemProps {
  post: iPost
}

export default function PostItem({post}: IPostItemProps) {
    return (
        <div className="bg-gray-200 text-black rounded-full aspect-square flex flex-col justify-items-center justify-center
                                    text-center text-white hover:bg-gray-800 hover:text-white transition
                                    shadow">
            <div className="">
                <h3>{post.title}</h3>
                <h4 className="bg-blue">{post.subtitle}</h4>
            </div>
        </div>
    )
}

