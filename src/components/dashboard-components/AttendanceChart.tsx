import { MoreHorizontalIcon } from 'lucide-react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
interface AttendanceChartProps {
    title: string;
}

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tues',
    present: 30,
    absent: 50,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 90,
  },
  {
    name: 'Thu',
    present: 80,
    absent: 38,
  },
  {
    name: 'Fri',
    present: 89,
    absent: 48,
  }
];


export default function AttendanceChart({title}:AttendanceChartProps) {
    return (
        <div className="h-full p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between">
                <h1 className='text-lg font-semibold'>{title}</h1>
                <MoreHorizontalIcon />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
                <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
                <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px', paddingBottom:"40px"}}/>
                <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10, 10, 0, 0]} />
                <Bar dataKey="absent" fill="#C3E8FA"  legendType='circle' radius={[10,10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}