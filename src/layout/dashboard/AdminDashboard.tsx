import FinanceChart from "../../components/dashboard-components/FinanceChart";
import AttendanceChart from "../../components/dashboard-components/AttendanceChart";
import CountChart from "../../components/dashboard-components/CountChart";
import UserCard from "../../components/dashboard-components/UserCard";
import EventCalendar from "../../components/dashboard-components/EventCalendar";
import Annoucements from "../../components/dashboard-components/Announcements";


const demoData = [
    { name: 'Total', count: 106, fill: '#ffffff' },
    { name: 'Girls', count: 53, fill: '#FAE27C' },
    { name: 'Boys', count: 53, fill: '#C3E8FA' },
];


export default function AdminDashboard(){
    return (
        <div className="flex flex-col gap-4 p-4 md:flex-row">
            {/* left */}
            <div className="flex flex-col w-full gap-8 lg:w-2/3">
                 {/* user card */}
                <div className="flex flex-wrap justify-between gap-4">
                    <UserCard type="parent" />
                    <UserCard type="teacher" />
                    <UserCard type="student" />
                    <UserCard type="staff" />
                </div>
                {/* Middle chart */}
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* Count chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart title="Students" data={demoData} />
                    </div>
                    {/* attendance chaerts */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart title="Attendance" />
                    </div>

                </div>
                {/* bottom chart */}
                <div className="w-full h-[500px]">
                    <FinanceChart title="Finance"/>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col w-full gap-8 lg:w-1/3 ">
                    <EventCalendar />
                    <Annoucements />
            </div>

        </div>
    )
}

{/* <UserCard type="staff" value={6_000} date="2024/02/25" label="Total Staff" />
                    <UserCard type="teacher" value={4_300} date="2024/02/20" />
                    <UserCard type="student" value={15_000} />
                    <UserCard type="parent" value={1_200} date="2024/02/22" label="Total Parents" /> */}


// import { MoreHorizontalIcon, Users } from 'lucide-react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


// interface CountChartProps {
//     title: string;
// }
// const data = [
//     {
//         name: 'Total',
//         count: 106,
//         fill: '#fff',
//       },  
// {
//     name: 'Girls',
//     count: 53,
//     fill: '#FAE27C',
//   },
//   {
//     name: 'Boys',
//     count: 53,
//     fill: '#C3E8FA',
//   },
  
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

// export default function CountChart({title}:CountChartProps) {
//     return (
//       <div className="w-full h-full p-4 bg-white rounded-xl">
//         {/* title */}
//         <div className="flex items-center justify-between">
//             <h1 className='text-lg font-semibold'>{title}</h1>
//             <MoreHorizontalIcon className='w-5 h-5 text-gray-900' />
//         </div>
//         {/* chart */}
//         <div className="relative w-full h-[75%]">
//             <ResponsiveContainer>
//                 <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
//                 <RadialBar
//                     background
//                     dataKey="count"
//                 />
                
//                 </RadialBarChart>
//             </ResponsiveContainer>
//             <Users className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' size={40} />
//         </div>
//         {/* bottom */}
//         <div className="flex justify-center gap-16">
//             <div className="flex flex-col items-center gap-1">
//                 <div className="w-5 h-5 rounded-full bg-sky" />
//                 <h1 className='font-bold'>343</h1>
//                 <h2 className='text-xs text-gray-300'>Boys (95%)</h2>
//             </div>
//             <div className="flex flex-col items-center gap-1">
//                 <div className="w-5 h-5 rounded-full bg-yellow" />
//                 <h1 className='font-bold'>343</h1>
//                 <h2 className='text-xs text-gray-300'>Girls (25%)</h2>
//             </div>
//         </div>
//       </div>
//     );
// }
