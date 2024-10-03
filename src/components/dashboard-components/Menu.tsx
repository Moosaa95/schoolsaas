// import { Calendar, ClipboardList, FileText, GraduationCap, HomeIcon, LogOutIcon, Settings, Settings2Icon, UserCircle, Users } from "lucide-react"
// import { Link } from "react-router-dom"

// const dashboardMenuItems = [
//     {
//         title: "MENU",
//         items: [
//             {
//                 icon: <HomeIcon />,
//                 label: "Home",
//                 href: "/"
//             },
//             {
//                 icon: <UserCircle />,
//                 label: "Teachers",
//                 href: "/teachers"
//             },
//             {
//                 icon: <Users />,
//                 label: "Students",
//                 href: "/students"
//             },
//             {
//                 icon: <UserCircle />,
//                 label: "Parents",
//                 href: "/parents"
//             },
//             {
//                 icon: <GraduationCap />,
//                 label: "Courses",
//                 href: "/courses"
//             },
//             {
//                 icon: <ClipboardList />,
//                 label: "Exams",
//                 href: "/exams"
//             },
//             {
//                 icon: <Calendar />,
//                 label: "Timetable",
//                 href: "/timetable"
//             },
//             {
//                 icon: <FileText />,
//                 label: "Classes",
//                 href: "/classes"
//             },
//             {
//                 icon: <FileText />,
//                 label: "Assignment",
//                 href: "/assignment"
//             },
//             {
//                 icon: <FileText />,
//                 label: "Attendance",
//                 href: "/attendance"
//             },
//             {
//                 icon: <FileText />,
//                 label: "Lessons",
//                 href: "/lessons"
//             },
//             {
//                 icon: <UserCircle />,
//                 label: "Events",
//                 href: "/events"
//             },
//             {
//                 icon: <UserCircle />,
//                 label: "Messages",
//                 href: "/messages"
//             },
//             {
//                 icon: <UserCircle />,
//                 label: "Announcements",
//                 href: "/announcements"
//             },
           
//         ]
//     },
//     {
//         title: 'OTHER',
//         items: [
//             {
//                 icon: <UserCircle />,
//                 label: "Profile",
//                 href: "/profile"
//             },
//             {
//                 icon: <Settings2Icon />,
//                 label: "Settings",
//                 href: "/settings"
//             },
//             {
//                 icon: <LogOutIcon />,
//                 label: "Logout",
//                 href: "/logout"
//             },
//         ]
//     }
// ]

// export default function Menu() {
//     return (
//         <div className="mt-4 text-sm">
//             {dashboardMenuItems.map(i => (
//                 <div className="flex flex-col gap-2" key={i.title}>
//                     <span className="hidden my-4 font-light text-gray-400 lg:block">{i.title}</span>
//                     {i.items.map(item => (
//                         <Link to={item.href} key={item.label} className="flex items-center justify-center gap-4 py-2 lg:justify-start to-gray-500">
//                             {item.icon}
//                             <span>{item.label}</span>
//                         </Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )
// }

import { role } from "@/lib/data";
import { Bell, BookOpen, BookOpenIcon, Calendar, CheckSquare, ClipboardList, FileText, GraduationCap, HomeIcon, LayoutList, LogOut, LogOutIcon, MessageCircle, Settings, Settings2Icon, User, UserCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuProps {
    role: string;
}
const dashboardMenuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <HomeIcon />,
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Home
        },
        {
          icon: <User />,
          label: "Teachers",
          href: "/dashboard/teachers/list",
          visible: ["admin", "teacher"] // Only admin and teachers should see this
        },
        {
          icon: <Users />,
          label: "Students",
          href: "/dashboard/students/list",
          visible: ["admin", "teacher"] // Only admin and teachers should see this
        },
        {
          icon: <User />,
          label: "Parents",
          href: "/dashboard/parents/list",
          visible: ["admin", "teacher"] // Only admin and teachers should see this
        },
        {
          icon: <GraduationCap />,
          label: "Subjects",
          href: "/dashboard/subjects/list",
          visible: ["admin"] // Admin, teachers, and students should see Courses
        },
        {
          icon: <ClipboardList />,
          label: "Exams",
          href: "/dashboard/exams/list",
          visible: ["admin", "teacher", "student", "parent"] // Admin, teachers, and students should see Exams
        },
        {
          icon: <Calendar />,
          label: "Timetable",
          href: "/dashboard/timetable/list",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Timetable
        },
        {
          icon: <LayoutList />,
          label: "Classes",
          href: "/dashboard/classes/list",
          visible: ["admin", "teacher"] // Only admin and teachers should see Classes
        },
        {
          icon: <FileText />,
          label: "Assignments",
          href: "/dashboard/assignments/list",
          visible: ["admin", "teacher", "student", "assignment"] // Admin, teachers, and students should see Assignments
        },
        {
          icon: <CheckSquare />,
          label: "Attendance",
          href: "/dashboard/attendance/list",
          visible: ["admin", "teacher", "parent"] // Admin, teachers, and parents should see Attendance
        },
        {
            icon: <BookOpenIcon />,
            label: "Results",
            href: "/dashboard/results/list",
            visible: ["admin", "teacher", "parent", "student"] // Admin, teachers, and parents should see Attendance
          },
        {
          icon: <BookOpen />,
          label: "Lessons",
          href: "/dashboard/lessons/list",
          visible: ["admin", "teacher", "student"] // Admin, teachers, and students should see Lessons
        },
        {
          icon: <Calendar />,
          label: "Events",
          href: "/dashboard/events/list",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Events
        },
        {
          icon: <MessageCircle />,
          label: "Messages",
          href: "/dashboard/messages/list",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Messages
        },
        {
          icon: <Bell />,
          label: "Announcements",
          href: "/dashboard/announcements/list",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Announcements
        }
      ]
    },
    {
      title: 'OTHER',
      items: [
        {
          icon: <User />,
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Profile
        },
        {
          icon: <Settings />,
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Settings
        },
        {
          icon: <LogOut />,
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"] // All users should see Logout
        }
      ]
    }
  ];
  export default function Menu({ role }:MenuProps) {
    return (
      <div className="mt-4 text-sm">
        {dashboardMenuItems.map((section) => (
          <div className="flex flex-col gap-2" key={section.title}>
            {/* Section Title */}
            <span className="hidden my-4 font-light text-gray-400 lg:block">{section.title}</span>
  
            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {section.items.map((item) => (
                item.visible.includes(role) && (
                  <Link
                    to={item.href}
                    key={item.label}
                    className="flex items-center gap-4 px-2 py-1 text-gray-600 rounded-md hover:bg-sky md:px-2 lg:justify-start"
                  >
                    {/* Icon */}
                    <span className="text-lg">{item.icon}</span>
  
                    {/* Text Label - Hidden on small screens */}
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
// export default function Menu() {
//     return (
//         <div className="mt-4 text-sm">
//             {dashboardMenuItems.map((section) => (
//                 <div className="flex flex-col gap-2" key={section.title}>
//                     {/* Section Title */}
//                     <span className="hidden my-4 font-light text-gray-400 lg:block">{section.title}</span>
                    
//                     {/* Menu Items */}
//                     <div className="flex flex-col gap-2">
//                         {section.items.map((item) => {
//                             if (item.visible.includes(role){
//                                 return (
//                                     <Link 
//                                     to={item.href} 
//                                     key={item.label} 
//                                     className="flex items-center gap-4 px-2 py-1 text-gray-600 rounded-md hover:bg-gray-100 lg:justify-start"
//                                 >
//                                     {/* Icon */}
//                                     <span className="text-lg">{item.icon}</span>
                                    
//                                     {/* Text Label - Hidden on small screens */}
//                                     <span className="hidden lg:block">{item.label}</span>
//                                 </Link>
//                                 )
//                             })
//                         }
                        
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
