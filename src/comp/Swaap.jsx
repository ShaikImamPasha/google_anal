'use client';
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'CATEGORY';

const initialOrders = [
  {
    title:"amazon",
    data:[
      { b2b: 0, data: { data: 0, discount: 1, totalItem: 2, totalGst: 3 } },
      { b2c: 1, data: { totalGst: 0, amt: 1, Data: 2 } },
      { cns: 2, data: { inviceNo: 0, discount: 1, Data: 2 } },
    ]
  },
  {
    title:"default",
    data:[
      { b2b: 0, data: { totalItem: 2, totalGst: 3 } },
      { cns: 2, data: { inviceNo: 0, discount: 1, Data: 2 } },
    ]
  },
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 rounded-lg p-2 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

const Swaap = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(initialOrders[0]); // Auto-select first item
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
console.log("orders",orders);

  const moveCategory = (fromIndex, toIndex) => {
    const updatedOrders = [...orders];
    const [movedCategory] = updatedOrders.splice(fromIndex, 1);
    updatedOrders.splice(toIndex, 0, movedCategory);

    updatedOrders.forEach((order, index) => {
      const categoryKey = Object.keys(order)[0];
      order[categoryKey] = index;
    });

    setOrders(updatedOrders);
  };

  const swapFields = (orderIndex, field1Idx, field2Idx) => {
    const updatedOrders = [...orders];
    const order = { ...updatedOrders[orderIndex] };
    
    const dataEntries = Object.entries(order.data);
    const temp = dataEntries[field1Idx];
    dataEntries[field1Idx] = dataEntries[field2Idx];
    dataEntries[field2Idx] = temp;
    
    const newData = {};
    dataEntries.forEach(([key], index) => {
      newData[key] = index;
    });
    
    order.data = newData;
    updatedOrders[orderIndex] = order;
    
    setOrders(updatedOrders);
    setSelectedOrder(order);
  };

  const DraggableCategory = ({ order, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemType,
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveCategory(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    const categoryKey = Object.keys(order)[0];
    const isSelected = selectedOrder && Object.keys(selectedOrder)[0] === categoryKey;

    return (
      <div
        ref={(node) => drag(drop(node))}
        onClick={() => setSelectedOrder(order)}
        className={`
          group relative p-4 bg-white rounded-xl
          border-2 transition-all duration-200 cursor-move
          hover:shadow-lg hover:scale-[1.02]
          ${isDragging ? 'opacity-50' : 'opacity-100'}
          ${isSelected 
            ? 'border-blue-500 shadow-blue-100/50 shadow-lg' 
            : 'border-gray-100 hover:border-gray-200'}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 opacity-40 group-hover:opacity-60">
              <div className="w-6 h-0.5 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-400 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {categoryKey.toUpperCase()}
              </h3>
             
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`
              w-2 h-2 rounded-full
              ${isSelected ? 'bg-blue-500' : 'bg-gray-300'}
            `}></span>
          </div>
        </div>
      </div>
    );
  };


  
  const DraggableField = ({ field, idx, orderIndex }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'FIELD',
      item: { orderIndex, fieldIdx: idx },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'FIELD',
      hover: (draggedItem) => {
        if (draggedItem.fieldIdx !== idx) {
          swapFields(orderIndex, draggedItem.fieldIdx, idx);
          draggedItem.fieldIdx = idx;
        }
      },
    });

    return (
      <div
        ref={(node) => drag(drop(node))}
        onClick={() => {
          setSelectedField(field);
          setIsModalOpen(true);
        }}
        className={`
          group p-4 bg-white rounded-xl border-2 border-gray-100
          transition-all duration-200 cursor-move
          hover:shadow-md hover:border-gray-200 hover:scale-[1.02]
          ${isDragging ? 'opacity-50' : 'opacity-100'}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1 opacity-40 group-hover:opacity-60">
              <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
              <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
            </div>
            <span className="font-medium text-gray-700">{field}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-600 rounded-lg font-medium">
              {/* {selectedOrder.data[field]} */}
            </span>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-6xl mx-auto">


          <div className="grid lg:grid-cols-2 gap-8">
            {/* Categories Section */}
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                  {orders.length} Total
                </span>
              </div>
              <div className="space-y-3">
                {orders.map((order, index) => (
                  <DraggableCategory key={index} order={order} index={index} />
                ))}
              </div>
            </div>

            {/* Fields Section */}
            {selectedOrder && (
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/10 pt-20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 pt-10">
                      Fields for {Object.keys(selectedOrder)[0].toUpperCase()}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {Object.keys(selectedOrder.data).length} fields available
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {Object.keys(selectedOrder.data).map((key, idx) => (
                    <DraggableField
                      key={key}
                      field={key}
                      idx={idx}
                      orderIndex={orders.findIndex(
                        (order) => Object.keys(order)[0] === Object.keys(selectedOrder)[0]
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detail Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {selectedField && (
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Field Details
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Field Name</p>
                  <p className="font-medium text-gray-900">{selectedField}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Current Position</p>
                  <p className="font-medium text-gray-900">
                    {selectedOrder.data[selectedField]}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="font-medium text-gray-900">
                    {Object.keys(selectedOrder)[0].toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DndProvider>
  );
};

export default Swaap;