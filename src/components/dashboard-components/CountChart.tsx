import React from 'react';
import { MoreHorizontalIcon, Users } from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

// Define the type for individual data items
interface DataItem {
  name: string;
  count: number;
  fill: string;
}

// Define the prop types for the CountChart component
interface CountChartProps {
  title: string;
  data: DataItem[];
  icon?: React.ElementType; // Optional custom icon component
}

// Default icon if none is provided
const defaultIcon = Users;

// Main CountChart component
const CountChart: React.FC<CountChartProps> = ({ title, data, icon: IconComponent = defaultIcon }) => {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="w-full h-full p-4 bg-white shadow-lg rounded-xl">
      {/* Title Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <MoreHorizontalIcon className="w-5 h-5 text-gray-900" />
      </div>
      
      {/* Radial Bar Chart */}
      <div className="relative w-full h-[60%] mb-6">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Center Icon */}
        {IconComponent && (
          <IconComponent className="absolute text-gray-600 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" size={40} />
        )}
      </div>

      {/* Dynamic Legend Section */}
      <div className="flex justify-center gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.fill }} />
            <h1 className="font-bold">{item.count}</h1>
            <h2 className="text-xs text-gray-500">{item.name} ({((item.count / totalCount) * 100).toFixed(1)}%)</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
