import CommonLayout from '@components/common/CommonLayout'
import styles from '@styles/Home.module.css'
import {useRouter} from "next/router";
import {iPost, mockData} from "@mocks/data";
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const Markdown = dynamic(()=> import('@components/post/Markdown'),{
	  ssr:false
})


export default function PostView({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <CommonLayout>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <div id='editor'>
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
