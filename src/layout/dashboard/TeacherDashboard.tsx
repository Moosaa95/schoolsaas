import BigCalendar from "../../components/dashboard-components/BigCalendar";
import Annoucements from "../../components/dashboard-components/Announcements";
import EventCalendar from "../../components/dashboard-components/EventCalendar";

export default function TeacherDashboard() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4 xl:flex-row">
            {/* left */}
            <div className="w-full xl:w-2/3">
                <div className="h-full p-4 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col w-full gap-8 xl:w-1/3">
                <Annoucements />
            </div>

        </div>
    )
}