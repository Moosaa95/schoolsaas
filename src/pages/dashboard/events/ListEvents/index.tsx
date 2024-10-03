import { useState } from "react";
import { Link } from "react-router-dom";

// custom imports
import { FilterIcon, SortAscIcon, PlusIcon, DeleteIcon, Edit2Icon } from "lucide-react";
import {   events,  role } from "../../../../lib/data";
import ActionButton from "../../../../components/dashboard-components/ActionButtons";
import TableSearch from "../../../../components/dashboard-components/TableSearch";
import Table from "../../../../components/dashboard-components/Table";
import Pagination from "../../../../components/dashboard-components/Pagination";


type EventProps = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
}

const columns = [
    {
        header: "Event Title",
        accessor: "title",
    },
    {
        header: "Class",
        accessor: "class",
        // className: 'hidden md:table-cell',

    },
    {
        header: "Date",
        accessor: "date",
        className: 'hidden md:table-cell',

    },
    {
        header: "Start Time",
        accessor: "startTime",
        className: 'hidden md:table-cell',

    },
    {
        header: "End Time",
        accessor: "endTime",
        className: 'hidden md:table-cell',

    },
    {
        header: "Actions",
        accessor: "actions",
        
    },
]

export default function ListResults() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const renderRow = (item:EventProps) => (
        <tr key={item.id} className="text-sm border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight">
            <td className="flex items-center gap-4 p-4">
                {item.title}
            </td>
            <td className="">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.startTime}</td>
            <td className="hidden md:table-cell">{item.endTime}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link to={`/list/exams/${item.id}`} className="flex gap-4">
                        {role === "admin" && <ActionButton icon={Edit2Icon} ariaLabel="Edit Exam" tooltip="Edit" />}
                        {role === "admin" && <ActionButton icon={DeleteIcon} className="bg-redLight"  ariaLabel="Delete Teachers" tooltip="Delete" />}
                        
                    </Link>
                </div>
            </td>
            
        </tr>
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className="flex-1 p-4 m-4 mt-0 bg-white rounded-md shadow-sm">
            {/* TOP SECTION */}
            <div className="flex items-center justify-between mb-4">
                {/* Title for Medium+ Screens */}
                <h1 className="hidden text-lg font-semibold md:block">All Events</h1>

                {/* Search and Action Buttons */}
                <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
                    {/* Search Input */}
                    <TableSearch placeholder="Search teachers..." />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <ActionButton icon={FilterIcon} ariaLabel="Filter Teachers" tooltip="Filter" />
                        <ActionButton icon={SortAscIcon} ariaLabel="Sort Teachers" tooltip="Sort" />
                        <ActionButton icon={PlusIcon} ariaLabel="Add New Teacher" tooltip="Add Teacher" />
                    </div>
                </div>
            </div>

            {/* LIST SECTION (Placeholder for Teacher List) */}
           
                <Table columns={columns} data={events} renderRow={renderRow}/>
           

            {/* PAGINATION */}
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    );
}
