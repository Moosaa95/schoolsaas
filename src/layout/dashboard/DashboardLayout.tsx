import DashboardNavbar from "../../components/dashboard-components/Navbar"
import Menu from "../../components/dashboard-components/Menu"
import { School2Icon } from "lucide-react"
import {Link, Outlet} from "react-router-dom"
import { role } from "../../lib/data"

export default function DashboardLayout() {
    return (
       <div className="flex h-screen">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
            <Link to="/" className="flex items-center justify-center gap-2 lg:justify-start">
                <School2Icon size={30}  />
                <span className="hidden font-bold lg:block">School</span>
            </Link>
            <Menu role={role} />
        </div>
        {/* Right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#F7F8FA] scrollbar-thin  overflow-y-scroll flex flex-col">
            <DashboardNavbar />
            <Outlet />
        </div>
       </div>
    )
}