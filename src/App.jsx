import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Input from "./components/Input";
import SlideImg from "./components/SlideImg";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const inputAddModal = [
        {
            inputName: "productName",
            labelName: " Product Name",
            inputType: "text",
        },
        {
            inputName: "productDetails",
            labelName: "Product Details",
            inputType: "text",
        },
        {
            inputName: "productCode",
            labelName: "Product Code",
            inputType: "text",
        },
    ];

    const handleAdd = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar
                onClose={() => setIsMenuOpen(false)}
                isMenuOpen={isMenuOpen}
                onMenuChange={() => setIsMenuOpen(!isMenuOpen)}
            />
            <SlideImg />
            <div className="fixed bottom-0 right-0  w-10 h-10 ">
                <button
                    className="text-4xl -m-6 sm:text-6xl sm:-m-16"
                    onClick={() => setIsModalOpen(true)}
                >
                    ➕
                </button>
            </div>
            <Modal
                onClose={() => setIsModalOpen(false)}
                onClickChange={() => setIsModalOpen(!isModalOpen)}
                isModalOpen={isModalOpen}
            >
                <div className="flex flex-col">
                    <h1 className="text-center my-1 font-bold">Add Item</h1>
                    {inputAddModal.map((item, i) => (
                        <Input
                            key={"inputAddModal" + i}
                            inputName={item.inputName}
                            labelName={item.labelName}
                            inputType={item.inputType}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center my-4 mx-16">
                    <button
                        onClick={handleAdd}
                        className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-400"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-400"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default App;
