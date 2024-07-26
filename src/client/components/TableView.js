import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BusinessModal from './BusinessModal';
import { delete_business } from '../store/reducers/businessReducer';

const TableView = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => state.business.business_info);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setBusinessInfo] = useState({
        image: '',
        name: '',
        detail: '',
        date: '',
        industry: '',
        employee_count: 0
    });
    const [currentId, setCurrentId] = useState(0);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

    const handleEdit = (id) => {
        setBusinessInfo(businesses[id]);
        setCurrentId(id);
        setModalOpen(true);
    };
    
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this business?")) {
            dispatch(delete_business(id));
        }
    };

    // Calculate total pages
    const totalPages = Math.ceil(businesses.length / itemsPerPage);
    
    // Slice the businesses array for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedBusinesses = businesses.slice(startIndex, startIndex + itemsPerPage);

    // Pagination handlers
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page on items per page change
    };

    return (
        <>
            <div className="flex items-center justify-start mb-4">
                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                <select
                    id="itemsPerPage"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border rounded p-1"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-blue-500 text-white border-b">
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Business Name</th>
                        <th className="py-2 px-4">Industry</th>
                        <th className="py-2 px-4">Founded</th>
                        <th className="py-2 px-4">Detail</th>
                        <th className="py-2 px-4">Employee</th>
                        <th className="py-2 px-4">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedBusinesses.map((item, index) => (
                        <tr key={startIndex + index} className="hover:bg-gray-100 border-b">
                            <td className="py-2 px-4 text-center">{startIndex + index + 1}</td>
                            <td className="py-2 px-4 text-center">{item.name}</td>
                            <td className="py-2 px-4 text-center">{item.industry}</td>
                            <td className="py-2 px-4 text-center">{item.date}</td>
                            <td className="py-2 px-4 text-center">{item.detail}</td>
                            <td className="py-2 px-4 text-center">{item.employee_count}</td>
                            <td className="flex justify-around py-2 px-4">
                                <button onClick={() => handleEdit(startIndex + index)} className="text-blue-500 hover:text-blue-700">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button onClick={() => handleDelete(startIndex + index)} className="text-red-500 hover:text-red-700 ml-2">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button 
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1} 
                    className="border px-4 py-2 text-white bg-blue-500 disabled:opacity-50"
                >
                    Previous
                </button>
                <div>
                    Page {currentPage} of {totalPages}
                </div>
                <button 
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages} 
                    className="border px-4 py-2 text-white bg-blue-500 disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            <BusinessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} current_item={currentItem} index={currentId} method={1}/>
        </>
    );
}

export default TableView;
