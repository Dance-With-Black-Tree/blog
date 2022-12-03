import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList";

import {mockData} from "@mocks/data";

export default function Home() {
    return (
        <div >
            <CommonLayout>
                <div className="w-full rounded-2xl shadow-xl">
                    <div className="relative w-1/2 aspect-square m-auto">
                        <Image
                            className="rounded-xl"
                            src={"/img/logo.jpeg"}
                            alt="banner"
                            fill={true}

                        />
                        <h1 className="text-3xl absolute bottom-5 left-5 text-white font-bold">살..려..줘..</h1>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold my-10">Recent Posts</h2>
                    <PostList limit={8}/>
                </div>
            </CommonLayout>
        </div>
    );
}
