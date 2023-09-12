// Modal.js

import React from 'react';

const Modal = ({ item, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 ...">
      <div className="relative bg-white ...">
        {/* Modal content */}
        <img src={item.image} alt={item.description} />
        {/* Display item content here */}
        <button
          onClick={onClose}
          className="text-gray-400 ...">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
