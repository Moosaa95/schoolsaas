import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: PaginationProps) {
    // Generate a range of page numbers to show in the pagination
    const getPageNumbers = () => {
        const pageNumbers = [];
        const range = 3; // Range of pages to show around the current page

        for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-between p-4 text-gray-500">
            {/* Previous Button */}
            <button
                className={`px-4 py-2 text-xs font-semibold rounded-md bg-slate-200 transition-colors duration-200 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-300"
                }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2 text-sm">
                {/* Show the first page if current range doesn't include it */}
                {currentPage > 4 && (
                    <>
                        <button
                            className="px-2 py-1 transition-colors duration-200 rounded-md bg-slate-200 hover:bg-slate-300"
                            onClick={() => onPageChange(1)}
                        >
                            1
                        </button>
                        <span className="text-gray-400">...</span>
                    </>
                )}

                {/* Render dynamic page numbers */}
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                            page === currentPage
                                ? "bg-blue-500 text-white"
                                : "bg-slate-200 hover:bg-slate-300"
                        }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Show the last page if current range doesn't include it */}
                {currentPage < totalPages - 3 && (
                    <>
                        <span className="text-gray-400">...</span>
                        <button
                            className="px-2 py-1 transition-colors duration-200 rounded-md bg-slate-200 hover:bg-slate-300"
                            onClick={() => onPageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
            </div>

            {/* Next Button */}
            <button
                className={`px-4 py-2 text-xs font-semibold rounded-md bg-slate-200 transition-colors duration-200 ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-300"
                }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
