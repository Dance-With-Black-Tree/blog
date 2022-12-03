import CommonLayout from '@components/common/CommonLayout'
import {useRouter} from "next/router";
import {iPost, mockData} from "@mocks/data";
import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {GetServerSideProps, InferGetServerSidePropsType, GetStaticProps} from 'next';
import axios from 'axios';
import Image from 'next/image';

const Markdown = dynamic(() => import('@components/post/Markdown'), {
    ssr: false
})


export default function PostView({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [text,setText] = useState('');

    useEffect(()=>{
        console.log(data.mainImg);
        
        getContents();
    }, [])

    const getContents = async () => {
        const res = await fetch(`/contents/${data.id}.md`);
        const text2 = await res.text();
        
        
        setText(text2);
    }
    return (
        <CommonLayout>
            <div className="my-5 relative h-96 flex flex-col justify-center px-5 shadow-md" 
                style={{
                    backgroundImage : `url(${data.mainImg})`,
                    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                
            }}>
                <h1 className="font-bold text-3xl text-white">{data.title}</h1>
                <h3 className={"text-white font-light"}>{new Date(data.date).toDateString()}</h3>    
            </div>
            
            <div className="my-10">
                {text !== '' && <Markdown text={text}/>}
            </div>
        </CommonLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            data: mockData.filter(value => value.id === context.query.postId)[0],
        },
    };
};
