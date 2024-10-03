import { Outlet } from "react-router-dom"
import { Footer, Header, Hero } from "../components"

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container flex-1 py-10 mx-auto">
                {/* {children} */}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}