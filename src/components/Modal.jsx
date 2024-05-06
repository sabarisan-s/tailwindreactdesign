import React from "react";

const Modal = ({ children, onClickChange, isModalOpen, onClose }) => {
    return (
        <div>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex justify-center items-center"
                    onClick={onClose}
                >
                    <div
                        className="w-[90%] sm:w-[60%] bg-white rounded-xl flex flex-col px-5 "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end" onClick={onClose}>
                            <button className="mx-4 mt-4 hover:text-red-900 text-slate-700">X</button>
                        </div>
                        <div className="">{children}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
