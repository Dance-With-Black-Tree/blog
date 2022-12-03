import { iPost } from "@mocks/data"

interface IPostItemProps {
  post: iPost
}

export default function PostItem({post}: IPostItemProps) {
    return (
        <div className="bg-black w-10 h-10 rounded-full ">
            <h3 >{post.title}</h3>
            <h4 className="bg-orange-500">{post.subtitle}</h4>
            <span>이미지</span>
        </div>
    )
}
