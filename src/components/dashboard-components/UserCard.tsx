// import React from "react";
// import { MoreHorizontalIcon, User, Users, Briefcase, BookOpen } from "lucide-react"; // Import required icons

// // Define a reusable prop interface that includes common card fields
// interface UserCardProps {
//   type: 'staff' | 'teacher' | 'student' | 'parent'; // Type of user for styling and icon
//   value: number | string; // The main value displayed in the card
//   date?: string; // Optional date to show on the top right corner
//   label?: string; // Optional label to describe the value (e.g., "Total Students")
// }

// // Map to dynamically set icons and styles based on the user type
// const userTypeDetails = {
//   staff: {
//     color: 'bg-blue-100', // Background color for the card
//     textColor: 'text-blue-600',
//     icon: Briefcase,
//     label: 'Staff',
//   },
//   teacher: {
//     color: 'bg-yellow-100',
//     textColor: 'text-yellow-600',
//     icon: BookOpen,
//     label: 'Teacher',
//   },
//   student: {
//     color: 'bg-green-100',
//     textColor: 'text-green-600',
//     icon: Users,
//     label: 'Student',
//   },
//   parent: {
//     color: 'bg-purple-100',
//     textColor: 'text-purple-600',
//     icon: User,
//     label: 'Parent',
//   },
// };

// // Main reusable UserCard component
// export default function UserCard({ type, value, date = "2024/02/25", label }: UserCardProps) {
//   const { color, textColor, icon: Icon, label: defaultLabel } = userTypeDetails[type]; // Destructure type details

//   return (
//     <div className={`flex-1 p-4 rounded-2xl shadow-md odd:bg-purple even:bg-yellow`}> {/* Use dynamic background color */}
//       {/* Header section */}
//       <div className="flex items-center justify-between">
//         {/* Optional date display */}
//         <span className="text-[10px] bg-white px-2 py-1 rounded-full text-gray-600 font-bold">{date}</span>
//         <MoreHorizontalIcon className="w-5 h-5 text-gray-500" />
//       </div>

//       {/* Main content */}
//       <div className="flex items-center my-4">
//         {/* Dynamic User Icon */}
//         <Icon className={`w-10 h-10 p-2 rounded-full ${textColor} bg-white`} /> {/* Icon with dynamic color */}
//         {/* Dynamic Value */}
//         <h1 className="ml-4 text-3xl font-semibold text-gray-800">{value}</h1>
//       </div>

//       {/* Footer section */}
//       {/* Use provided label or default to the mapped type label */}
//       <h2 className={`text-sm font-medium capitalize ${textColor}`}>{label ?? defaultLabel}</h2>
//     </div>
//   );
// }


import {  MoreHorizontalIcon } from "lucide-react";

interface UserCardProps {
    type: 'staff' | 'teacher' | 'student' | 'parent'; // Define allowed types
}

export default function UserCard({ type }: UserCardProps) {
    return (
        <div className="flex-1 p-4 rounded-2xl odd:bg-purple even:bg-yellow">
            <div className="flex items-center justify-between">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green font-bold">2024/02/25</span>
                <MoreHorizontalIcon className="w-5 h-5 text-gray-500" />
            </div>
            <h1 className="my-4 text-2xl font-semibold">6,000</h1>
            <h2 className="text-sm font-medium text-gray-500 capitalize">{type}</h2>
        </div>
    );
}
