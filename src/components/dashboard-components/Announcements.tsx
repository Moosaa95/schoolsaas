export default function Annoucements() {
    return (
        <div className="p-4 bg-white rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400 cursor-pointer">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="p-4 rounded-md bg-sky">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">
                            The new Announcement 
                        </h2>
                        <span className="px-1 py-1 text-xs text-gray-400 bg-white rounded-md">25/05/2024</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">Lorem the desctription of the text</p>
                </div>
                <div className="p-4 rounded-md bg-skyLight">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">
                            The new Announcement 
                        </h2>
                        <span className="px-1 py-1 text-xs text-gray-400 bg-white rounded-md">25/05/2024</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">Lorem the desctription of the text</p>
                </div>
                <div className="p-4 rounded-md bg-yellowLight">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">
                            The new Announcement 
                        </h2>
                        <span className="px-1 py-1 text-xs text-gray-400 bg-white rounded-md">25/05/2024</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">Lorem the desctription of the text</p>
                </div>
                <div className="p-4 rounded-md bg-yellow">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">
                            The new Announcement 
                        </h2>
                        <span className="px-1 py-1 text-xs text-gray-400 bg-white rounded-md">25/05/2024</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">Lorem the desctription of the text</p>
                </div>
            </div>

        </div>
    )
}