import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CommonLayout from "@components/common/CommonLayout";
import PostList from "@components/post/PostList";

import { mockData, iPost } from "@mocks/data";

import styles from "@styles/Home.module.css";

export default function Home() {
    const postData: iPost[] = Object.values(mockData)

    return (
        <div className={styles.container}>
            <CommonLayout>
                <div className="relative">
                    <Image
                        className="rounded-xl"
                        src={"/img/banner.jpg"}
                        width={910}
                        height={540}
                        alt="banner"
                    />
                    <h1 className="text-3xl absolute bottom-5 left-5 text-white font-bold">살..려..줘..</h1>
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Recent Posts</h2>
                    <PostList posts={mockData}/>
                </div>
            </CommonLayout>
        </div>
    );
}
