import Performance from "../../../../components/dashboard-components/Performance";
import Annoucements from "../../../../components/dashboard-components/Announcements";
import BigCalendar from "../../../../components/dashboard-components/BigCalendar";
import { BlocksIcon, BookOpenIcon, BuildingIcon, MailIcon, PhoneCall, QuoteIcon, PersonStanding } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import FormModal from "../../../../components/dashboard-components/FormModal";

export default function TeacherDetail() {
    const { id } = useParams();

    console.log(id, '=============teacher');
    
    
    return (
        <div className="flex flex-col flex-1 gap-4 p-4 xl:flex-row">
            {/* left */}
            <div className="w-full xl:w-2/3">
                <div className="flex flex-col gap-4 lg:flex-row">
                {/* USER INFO CARD */}
                    <div className="flex flex-1 gap-4 px-4 py-6 rounded-md bg-sky">
                        <div className="w-1/3">
                            <img src="" alt="user" width={144} height={144} className="object-cover rounded-full w-36 h-36"/>
                        </div>
                        <div className="flex flex-col justify-between w-2/3 gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-xl font-semibold">Musa Abdullahi</h1>

                                <FormModal table="teacher" type="update" data={
                                    {
                                        id: 1,
                                        username: "moosa",
                                        firstName: "abdul"
                                    }
                                } />
                            </div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id odit, minima reprehenderit illum </p>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                                <div className="flex items-center w-full gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                                    <BlocksIcon className="w-5 h-5 text-gray-500"/>
                                    <span>A+</span>
                                </div>
                                <div className="flex items-center w-full gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                                    <PhoneCall className="w-5 h-5 text-gray-500" />
                                    <span className="text-sm">+2347052859443</span>
                                </div>
                                <div className="flex items-center w-full gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                                    <MailIcon size={20} className="text-gray-500" />
                                    <span>moosa@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* small cards */}
                    <div className="flex flex-wrap justify-between flex-1 gap-4">
                        {/* cards */}
                        <div className="flex flex-col items-center bg-white p-4 gap-4 w-full rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <QuoteIcon />
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white p-4 gap-4 w-full rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <BuildingIcon />
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white p-4 gap-4 w-full rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <BookOpenIcon />
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-semibold">9</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white p-4 gap-4 w-full rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <PersonStanding />
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px] overflow-y-scroll scrollbar-thin scrollbar-track-amber-600">
                    <h1>Teacher&apos;s Schedule</h1>
                    <div className="h-full">
                    <BigCalendar />
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col w-full gap-4 xl:w-1/3">
                <div className="p-4 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                        <Link to="" className="p-3 rounded-md bg-skyLight">Teacher&apos;s Classes</Link>
                        <Link to="" className="p-3 rounded-md bg-purpleLight">Teacher&apos;s Students</Link>
                        <Link to="" className="p-3 rounded-md bg-yellowLight">Teacher&apos;s Lessons</Link>
                        <Link to="" className="p-3 rounded-md bg-pink-50">Teacher&apos;s Exams</Link>
                        <Link to="" className="p-3 rounded-md bg-skyLight">Teacher&apos;s ASsigments</Link>
                    </div>
                </div>
                <Performance />
                <Annoucements />
            </div>

        </div>
    )
}