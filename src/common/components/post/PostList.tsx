import Link from "next/link";
import {mockData} from "@mocks/data";

export default function PostList({limit}: { limit?: number }) {
    return <div className={"grid grid-cols-4 gap-4"}>
        {Object.keys(mockData).slice(0, limit || undefined).map((value, index) => {
            return (
                <Link href={`/post/${value}`} key={value}>
                    <div className="bg-gray-200 text-black rounded-full aspect-square flex flex-col justify-items-center justify-center
                                    text-center text-white hover:bg-gray-800 hover:text-white transition
                                    shadow">
                        <div className="">
                            <h3>{mockData[value].title}</h3>
                            <h4 className="bg-blue">설명</h4>
                        </div>
                    </div>
                </Link>
            )
        })}
    </div>;
}
