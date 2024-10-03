import { FilterIcon, SortAscIcon, PlusIcon,  ViewIcon, DeleteIcon } from "lucide-react";
import TableSearch from "../../../../components/dashboard-components/TableSearch";
import Pagination from "../../../../components/dashboard-components/Pagination";
import { useState } from "react";
import Table from "../../../../components/dashboard-components/Table";
import { Link } from "react-router-dom";
import ActionButton from "../../../../components/dashboard-components/ActionButtons";
import { role, teachers } from "../../../../lib/data";
import FormModal from "../../../../components/dashboard-components/FormModal";

// issues 
// importing issues with the @

type TeacherProps = {
    id: number;
    name: string;
    email?: string;
    phone: string;
    photo: string;
    subjects: string[];
    classes: string[];
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Teacher Id",
        accessor: "teacherId",
        className: 'hidden md:table-cell',
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: 'hidden md:table-cell',
    },
    {
        header: "Classes",
        accessor: "classes",
        className: 'hidden md:table-cell',
    },
    {
        header: "Phone",
        accessor: "phone",
        className: 'hidden lg:table-cell',
    },
    {
        header: "Address",
        accessor: "address",
        className: 'hidden lg:table-cell',
    },
    {
        header: "Actions",
        accessor: "actions",
        
    },
]

export default function ListTeachers() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const renderRow = (item:TeacherProps) => (
        <tr key={item.id} className="text-sm border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight">
            <td className="flex items-center gap-4">
                <img src={item.photo} width={40} height={40} alt="user image" className="object-cover w-10 h-10 rounded-full md:hidden xl:block" />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.id}</td>
            <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{item.classes.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link to={`/dashboard/teachers/${item.id}`} className="flex gap-4">
                        <ActionButton icon={ViewIcon} ariaLabel="View Teachers" tooltip="View" />
                        {/* {role === "admin" && <ActionButton icon={DeleteIcon} className="bg-redLight"  ariaLabel="Delete Teachers" tooltip="Delete" />} */}
                    </Link>
                    {role === "admin" && <FormModal type="delete" table="teacher" id={item.id} />}
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
                <h1 className="hidden text-lg font-semibold md:block">All Teachers</h1>

                {/* Search and Action Buttons */}
                <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
                    {/* Search Input */}
                    <TableSearch placeholder="Search teachers..." />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <ActionButton icon={FilterIcon} ariaLabel="Filter Teachers" tooltip="Filter" />
                        <ActionButton icon={SortAscIcon} ariaLabel="Sort Teachers" tooltip="Sort" />
                        {/* <ActionButton icon={PlusIcon} ariaLabel="Add New Teacher" tooltip="Add Teacher" />
                         */}
                         {role === "admin" && (
                            <FormModal type="create" table="teacher" />
                         )}
                    </div>
                </div>
            </div>

            {/* LIST SECTION (Placeholder for Teacher List) */}
           
                <Table columns={columns} data={teachers} renderRow={renderRow}/>
           

            {/* PAGINATION */}
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    );
}
