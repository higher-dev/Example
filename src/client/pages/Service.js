import React, { useState } from 'react';
import { FaTable, FaTh } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setViewType } from '../store/reducers/viewTypeReducer';
import TableView from '../components/TableView';
import CardView from '../components/CardView';
import BusinessModal from '../components/BusinessModal';

function Service() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const viewType = useSelector(state => state.showType.type);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleTableView = () => {
    dispatch(setViewType(true));
    setModalOpen(false);
  };

  const handleGridView = () => {
    dispatch(setViewType(false));
    setModalOpen(false);
  };

  return (
    <div className="p-6 pt-20">
      <h1 className="text-3xl font-bold mb-4">Registered Businesses</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <span 
            onClick={handleTableView} 
            className={`text-black p-2 px-4 rounded hover:bg-gray-500 flex items-center ${viewType ? 'bg-gray-300': 'bg-transparent'}`}
            title="Table View"
          >
            <FaTable className="text-lg" /> {/* Table icon */}
          </span>
          <button 
            onClick={handleGridView} 
            className={`text-black p-2 px-4 rounded hover:bg-gray-500 flex items-center ${viewType ? 'bg-transparent': 'bg-gray-300'}`}
            title="Grid View"
          >
            <FaTh className="text-lg" /> {/* Grid icon */}
          </button>
        </div>
        <button 
          onClick={handleAddClick} 
          className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 align-right"
        >
          Add New Business
        </button>
      </div>
      { viewType ? <TableView /> : <CardView /> }
      <BusinessModal isOpen={modalOpen} onClose={setModalOpen} method={0} index={0} />
    </div>
  );
}

export default Service;
