import { iPost, mockData } from "@mocks/data";
import Link from "next/link";
import { useState } from "react";

interface IPostItemProps {
  post: iPost;
}

export default function PostItem({ post }: IPostItemProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div>
            <div
                className="
                bg-white text-black rounded-full aspect-square flex flex-col justify-items-center justify-center
                text-center text-white hover:bg-gray-800 hover:text-white transition
                shadow"
                style={{
                    backgroundImage: isHover ? undefined : `url('${post.mainImg}')`,
                    backgroundPosition: "center",
                    // boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
                    backgroundSize: "cover",
                }}
                onMouseOver={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
            >
                <div className="font-bold text-white">
                    <h4 className="break-all px-5">{isHover && post.subtitle}</h4>
                </div>
            </div>
            <h3 className="text-center font-bold mt-5 text-md">{post.title}</h3>
        </div>
    );
}
