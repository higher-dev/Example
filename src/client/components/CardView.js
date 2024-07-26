import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BusinessModal from './BusinessModal';
import { delete_business } from '../store/reducers/businessReducer';

const CardView = () => {
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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {businesses.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <img src={item.image} alt={item.name} className="w-full h-52 object-cover rounded mt-2" />
                        <p className="mt-2"><strong>Industry:</strong> {item.industry}</p>
                        <p className="mt-2"><strong>Founded:</strong> {item.date}</p>
                        <p className="mt-2"><strong>Detail:</strong></p>
                        <p>{item.detail}</p>
                        <p className="mt-2"><strong>Employees:</strong> {item.employee_count}</p>
                        <div className="flex justify-between mt-4">
                            <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                                <i className="fas fa-edit"></i> {/* Edit icon */}
                            </button>
                            <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                                <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <BusinessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} current_item={currentItem} index={currentId} method={1}/>
        </>
    );
};

export default CardView;
