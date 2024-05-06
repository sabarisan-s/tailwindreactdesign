import React from "react";

const Input = ({ inputName, labelName, inputType }) => {
    return (
        <div className="flex flex-col px-5 my-2">
            <label htmlFor={inputName} className="mb-1 font-serif">
                {labelName}
            </label>
            <input
                type={inputType}
                name={inputName}
                id={inputName}
                className="dark:border-slate-800 border focus:outline-none rounded-md pl-3 py-2"
                placeholder="type here.."
            />
        </div>
    );
};

export default Input;
