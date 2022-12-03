import GlobalNavigationBar from "@components/common/GlobalNaviagtionBar"
import Footer from "@components/common/Footer"

interface ICommonLayoutProps {
  children: React.ReactNode
}

export default function CommonLayout({children}: ICommonLayoutProps) {
    return (
        <div className={"max-w-5xl m-auto px-10"}>
            <GlobalNavigationBar/>
            {children}
            <Footer/>
        </div>
    )
}
