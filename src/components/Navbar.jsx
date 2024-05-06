import React, { useState } from "react";

const Navbar = ({ onClose, onMenuChange, isMenuOpen }) => {
    const navItem = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/service" },
        { name: "Contact", link: "/contact" },
    ];
    
    const [isProfile, setIsProfile] = useState(false);

    return (
        <>
            <nav className="flex justify-between  bg-slate-100 py-2 px-5 shadow-lg sticky">
                <div className="flex justify-center items-center cursor-pointer gap-1">
                    <div className="">🚀</div>
                    <div className="font-bold">Brand</div>
                </div>

                <div className="">
                    <div className="sm:hidden text-2xl" onClick={onMenuChange}>
                        {isMenuOpen ? (
                            <button>&#128473;</button>
                        ) : (
                            <button onClick={onClose}>&#9776;</button>
                        )}
                    </div>

                    <ul
                        className={` ${
                            isMenuOpen
                                ? "top-12 z-1 sm:z-auto"
                                : "top-[-400%] z-[1] sm:z-auto"
                        } transition-all sm:transition-none duration-300 ease-out flex flex-col bg-slate-400 absolute w-full  left-0 sm:bg-transparent sm:static sm:flex-row  sm:w-auto sm:gap-3 sm:items-center `}
                    >
                        {navItem.map((item, i) => (
                            <li
                                key={i}
                                className="list-none px-5 py-3  sm:hover:bg-transparent  hover:bg-slate-300"
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                        <div className="relative">
                            <li onClick={() => setIsProfile(!isProfile)}>
                                <button className="hover:cursor-pointer list-none px-5 py-3  sm:btn sm:hover:bg-slate-400 sm:relative">
                                    Profile
                                </button>
                            </li>
                            {isProfile && (
                                <div
                                    className="absolute right-0 -bottom-2
                            "
                                >
                                    <div className="sm:absolute  sm:bg-slate-300 p-2 sm:bottom-[-10px] sm:right-1 sm:rounded-sm sm:rotate-45 sm:block hidden"></div>
                                    <div className="sm:absolute sm:bg-slate-300 sm:right-0 sm:px-3 sm:py-2 sm:w-40 sm:h-40 sm:rounded-md hidden sm:flex justify-center items-center flex-col ">
                                        <div className="rounded-full w-10 h-10 bg-slate-950 text-white flex justify-center items-center">
                                            df
                                        </div>
                                        <a href="#" className="py-1">
                                            🛒 Shopping{" "}
                                        </a>
                                        <a href="#" className="py-1">
                                            ⚙️ Setting{" "}
                                        </a>
                                        <a href="#" className="py-1">
                                            🔒LogOut{" "}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </nav>
            
        </>
    );
};

export default Navbar;
