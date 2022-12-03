import CommonLayout from '@components/common/CommonLayout'
import {useRouter} from "next/router";
import {iPost, mockData} from "@mocks/data";
import {useEffect} from 'react';
import dynamic from 'next/dynamic';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';

const Markdown = dynamic(() => import('@components/post/Markdown'), {
    ssr: false
})


export default function PostView({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <CommonLayout>
            <h1 className="font-bold text-3xl">{data.title}</h1>
            <h3 className={"text-gray-400 font-light"}>{data.date}</h3>
            <div className={"border-t-4 my-5"}/>
            <div className="my-10">
                <Markdown text={data.contents}/>
            </div>
        </CommonLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: {
            data: mockData[`${context.query.postNo}`],
        },
    };
};
