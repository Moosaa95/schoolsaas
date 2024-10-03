import { FilterIcon, SortAscIcon, PlusIcon, LucideProps, ViewIcon, DeleteIcon } from "lucide-react";
import TableSearch from "../../../../components/dashboard-components/TableSearch";
import Pagination from "../../../../components/dashboard-components/Pagination";
import { useState } from "react";
import Table from "../../../../components/dashboard-components/Table";
import { Link } from "react-router-dom";
import ActionButton from "../../../../components/dashboard-components/ActionButtons";
import { role, students } from "../../../../lib/data";
import FormModal from "../../../../components/dashboard-components/FormModal";


type StudentProps = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    phone: string;
    photo: string;
    grade: string;
    class: string;
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Id",
        accessor: "studentId",
        className: 'hidden md:table-cell',
    },
    {
        header: "Grade",
        accessor: "grade",
        className: 'hidden md:table-cell',
    },
    {
        header: "Address",
        accessor: "address",
        className: 'hidden md:table-cell',
    },
    {
        header: "Phone",
        accessor: "phone",
        className: 'hidden lg:table-cell',
    },
    {
        header: "Actions",
        accessor: "actions",
        
    },
]

export default function ListStudents() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const renderRow = (item:StudentProps) => (
        <tr key={item.id} className="text-sm border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight">
            <td className="flex items-center gap-4">
                <img src={item.photo} width={40} height={40} alt="user image" className="object-cover w-10 h-10 rounded-full md:hidden xl:block" />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link to={`/dashboard/students/${item.id}`} className="flex gap-4">
                        <ActionButton icon={ViewIcon} ariaLabel="View Teachers" tooltip="View" />
                        {/* {role === "admin" && <ActionButton icon={DeleteIcon} className="bg-redLight"  ariaLabel="Delete Teachers" tooltip="Delete" />} */}                        
                    </Link>
                    {role === "admin" && <FormModal type="delete" table="student" id={item.id}/>}

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
                <h1 className="hidden text-lg font-semibold md:block">All Students</h1>

                {/* Search and Action Buttons */}
                <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
                    {/* Search Input */}
                    <TableSearch placeholder="Search teachers..." />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <ActionButton icon={FilterIcon} ariaLabel="Filter Teachers" tooltip="Filter" />
                        <ActionButton icon={SortAscIcon} ariaLabel="Sort Teachers" tooltip="Sort" />
                        {role === "admin" &&  (
                            <FormModal type="create" table="student" />

                        )}
                    </div>
                </div>
            </div>

            {/* LIST SECTION (Placeholder for Teacher List) */}
           
                <Table columns={columns} data={students} renderRow={renderRow}/>
           

            {/* PAGINATION */}
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    );
}
