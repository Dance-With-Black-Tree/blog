import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function GlobalNavigationBar() {
    const router = useRouter();
    const getHighlightTabName = () => {
        if(router.pathname.indexOf("/post") >= 0){
            return "POST"
        }

        return "HOME"
    }

    const [currentTab, setCurrentTab] = useState<string>(getHighlightTabName());

    useEffect(()=>{
        setCurrentTab(getHighlightTabName());
    },[router])


    return <div className="flex justify-between items-center my-8">
        <div className={"text-3xl font-bold"}>
            Dance With Black Tree
        </div>
        {/*<div className="w-14 h-14 rounded-full bg-orange-500 relative shadow shadow-gray-800">*/}
        {/*    <Image className={"rounded-full"} src={"/img/logo.jpeg"} alt={"logo"} fill={true}/>*/}
        {/*</div>*/}
        <nav className={"flex gap-8 text-xl transition"}>
            <NavButton href={"/"} isHighlight={"HOME" === currentTab} title={"Home"}/>
            <NavButton href={"/post"} isHighlight={"POST" === currentTab} title={"Post"}/>

            <a>DarkMode</a>
        </nav>
    </div>
}

function NavButton({title, href, isHighlight}: { title: string, href: string, isHighlight: boolean }) {
    return <Link href={href} className={`${isHighlight && "font-bold underline underline-offset-4 decoration-4"}`}>{title}</Link>;
}