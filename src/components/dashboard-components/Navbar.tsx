import { Bell, MessageCircle, SearchIcon, User2Icon } from "lucide-react";

export default function DashboardNavbar() {
    return (
        <div className="flex items-center justify-between p-4">
            {/* search bar */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <SearchIcon className="ring-gray-300" />
                <input type="text" placeholder="Search...."  className="w-[200px] bg-transparent  outline-none"/>
            </div>
            {/* icons and user */}
            <div className="flex items-center justify-end w-full gap-6">
                <div className="flex items-center bg-white rounded-full cursor-pointer w-7 h-7">
                    <MessageCircle />
                </div>
                <div className="relative flex items-center bg-white rounded-full cursor-pointer w-7 h-7">
                    <Bell />
                    <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-purple-500 rounded-full -top-3 -right-3">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium leading-3">John Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <User2Icon />
            </div>
        </div>
    )
}