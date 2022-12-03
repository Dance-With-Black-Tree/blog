import CommonLayout from '@components/common/CommonLayout'
import {useRouter} from "next/router";
import {iPost, mockData} from "@mocks/data";
import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {GetServerSideProps, InferGetServerSidePropsType, GetStaticProps} from 'next';
import axios from 'axios';

const Markdown = dynamic(() => import('@components/post/Markdown'), {
    ssr: false
})


export default function PostView({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [text,setText] = useState('');

    useEffect(()=>{
        console.log(data);
        
        getContents();
    }, [])

    const getContents = async () => {
        const res = await fetch(`/contents/${data.id}.md`);
        const text2 = await res.text();
        
        
        setText(text2);
    }
    return (
        <CommonLayout>
            <div className="border-b-4 my-5">
                <h1 className="font-bold text-3xl">{data.title}</h1>
                <h3 className={"text-gray-400 font-light"}>{data.date}</h3>    
            </div>
            
            <div className="my-10">
                {text !== '' && <Markdown text={text}/>}
            </div>
        </CommonLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // console.log(`/contents/${context.query.postId}.md`);
    // const contents = await axios.get(`/contents/${context.query.postId}.md`)
    // // console.log(contents);

    console.log(fetch(`/contents/${context.query.id}.md`).then(res=>{
        res.text().then(res2 => {
            console.log(res2);  
        })
    
    }))

    return {
        props: {
            data: mockData.filter(value => value.id === context.query.postId)[0],
        },
    };
};
