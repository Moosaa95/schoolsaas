import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"
import {School} from "lucide-react"

const Header = () => {
  return (
    <header className="py-4 shadow-md borderb-2 border-b-gray-200">
        <div className="container flex items-center justify-between mx-auto">
            <Link to="/" className="flex items-center text-2xl font-bold tracking-tight text-gray-900">
                <School className="mr-2 text-red-700" />
                School title
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="items-center hidden space-x-6 md:flex">
                <MainNav />
            </div>
        </div>

    </header>
  )
}

export default Header
