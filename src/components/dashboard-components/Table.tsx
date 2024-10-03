import React from "react";

// Define the type for each column in the table
interface Column {
  header: string;
  accessor: string; // Key that maps to the data property
  className?: string; // Optional className for styling
}

// Define the type for the TableProps
interface TableProps {
  columns: Column[]; // Array of columns
  data: { [key: string]: any }[]; // Array of rows, where each row is an object with key-value pairs
  renderRow: (item: any) => React.ReactNode; // Added renderRow prop to TableProps
}

export default function Table({ columns, data, renderRow }: TableProps) {
  return (
    <table className="w-full mt-4">
      {/* Table Header */}
      <thead className="bg-gray-100">
        <tr className="text-sm text-left text-gray-500">
          {columns.map((column, index) => (
            <th
              key={index}
              className={` text-left font-medium text-gray-600 ${column.className || ""}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      {/* Render table body using the renderRow prop */}
      <tbody className="bg-white divide-y divide-gray-200">{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}
