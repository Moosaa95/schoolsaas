import { FilterIcon, SortAscIcon, PlusIcon,  DeleteIcon, Edit2Icon } from "lucide-react";
import TableSearch from "../../../../components/dashboard-components/TableSearch";
import Pagination from "../../../../components/dashboard-components/Pagination";
import { useState } from "react";
import Table from "../../../../components/dashboard-components/Table";
import { Link } from "react-router-dom";
import ActionButton from "../../../../components/dashboard-components/ActionButtons";
import { parents, role,  } from "../../../../lib/data";
import FormModal from "../../../../components/dashboard-components/FormModal";


type ParentProps = {
    id: number;
    name: string;
    email?: string;
    phone: string;
    students: string[];
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Names",
        accessor: "students",
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

export default function ListParents() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const renderRow = (item:ParentProps) => (
        <tr key={item.id} className="text-sm border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight">
            <td className="flex items-center gap-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link to={`/list/parents/${item.id}`} className="flex gap-4">
                        {/* {role === "admin" && <ActionButton icon={Edit2Icon} ariaLabel="Edit Parent" tooltip="Edit" />} */}
                        {/* {role === "admin" && <ActionButton icon={DeleteIcon} className="bg-redLight"  ariaLabel="Delete Teachers" tooltip="Delete" />} */}
                    </Link>
                    {role === "admin" &&  (
                        <>
                            <FormModal type="update" table="parent" data={item} />
                            <FormModal type="delete" table="parent" id={item.id} />
                        </>

                    )}
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
                <h1 className="hidden text-lg font-semibold md:block">All Parents</h1>

                {/* Search and Action Buttons */}
                <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
                    {/* Search Input */}
                    <TableSearch placeholder="Search teachers..." />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <ActionButton icon={FilterIcon} ariaLabel="Filter Teachers" tooltip="Filter" />
                        <ActionButton icon={SortAscIcon} ariaLabel="Sort Teachers" tooltip="Sort" />
                        {/* <ActionButton icon={PlusIcon} ariaLabel="Add New Teacher" tooltip="Add Teacher" /> */}
                        {role === "admin" &&  (
                            <FormModal type="create" table="parent" />

                        )}
                    </div>
                </div>
            </div>

            {/* LIST SECTION (Placeholder for Teacher List) */}
           
                <Table columns={columns} data={parents} renderRow={renderRow}/>
           

            {/* PAGINATION */}
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    );
}
