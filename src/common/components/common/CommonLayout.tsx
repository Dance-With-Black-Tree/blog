import GlobalNavigationBar from "@components/common/GlobalNaviagtionBar"
import Footer from "@components/common/Footer"

interface ICommonLayoutProps {
  children: React.ReactNode
}

export default function CommonLayout({children}: ICommonLayoutProps) {
    return (
        <div>
            <GlobalNavigationBar/>
            {children}
            <Footer/>
        </div>
    )
}
