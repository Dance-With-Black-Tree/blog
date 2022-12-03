import Link from "next/link";
import { mockData } from "@mocks/data";

export default function PostList() {
    return <div className="grid-cols-4">
        {Object.keys(mockData).map((value,index)=>{
            return (
                <Link href={`/post/${value}`} key={value}>
                    <div className="bg-black w-10 h-10 rounded-full ">
                        <h3 >{mockData[value].title}</h3>
                        <h4 className="bg-orange-500">설명</h4>
                        <span>이미지</span>
                    </div>
                </Link>)
        })}
    </div>
}
