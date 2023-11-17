import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const MenuBar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])

    const Links = [
        {
            id: 1,
            name: "Pages",
            hasSubMenu: true,
            subMenu: [
                {
                    id: 2,
                    head: "Topwear",
                    links: [
                        { id: 3, name: "T-shirt", to: "/" },
                        { id: 4, name: "T-shirt", to: "/" },
                        { id: 5, name: "T-shirt", to: "/" },
                        { id: 6, name: "T-shirt", to: "/" },
                        { id: 7, name: "T-shirt", to: "/" },
                    ],
                },

            ],
        },

        {
            id: 8,
            name: "Post Layouts",
            hasSubMenu: true,
            subMenu: [
                {
                    id: 9,
                    head: "Topwear1",
                    links: [
                        { id: 10, name: "T-shirt", to: "/" },
                        { id: 11, name: "T-shirt", to: "/" },
                        { id: 12, name: "T-shirt", to: "/" },
                        { id: 13, name: "T-shirt", to: "/" },
                        { id: 14, name: "T-shirt", to: "/" },
                    ],
                },

            ],
        },

        {
            id: 15,
            name: "Post Features",
            hasSubMenu: true,
            subMenu: [
                {
                    id: 16,
                    head: "Topwear",
                    links: [
                        { id: 17, name: "T-shirt", to: "/" },
                        { id: 18, name: "T-shirt", to: "/" },
                        { id: 19, name: "T-shirt", to: "/" },
                        { id: 20, name: "T-shirt", to: "/" },
                        { id: 21, name: "T-shirt", to: "/" },
                    ],
                },
            ],
        },
    ]
    return (
        <div className="h-[200vh]">
            <nav className="p-3 fixed top-28 w-full z-50 bg-[red]">
                <div className={`container mx-auto duration-200 ${changeColor ? "bg-white rounded-full p-1 lg:px-5 shadow-lg border" : ""}`}>

                    <div className="flex items-center justify-between">
                        <div>
                            <h2>mamondots</h2>
                        </div>
                        {/* big-device */}

                        <div>
                            <ul className={`hidden lg:flex items-center gap-8 font-bold text-sm relative ${changeColor ? "text-gray-600" : "text-white"}`}>
                                <li>
                                    <Link to="/" className="py-7 inline-block">
                                        Adopt a Pet
                                    </Link>
                                </li>

                                {
                                    Links.map((link) => <div key={link.id}>
                                        <h3 className="cursor-pointer flex items-center gap-2"><span>{link.name}</span></h3>
                                    </div>)
                                }
                                <li>
                                    <Link to="/" className="py-7 inline-block">
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="py-7 inline-block">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="py-7 inline-block">
                                        Purchase
                                    </Link>
                                </li>
                                <button className="text-white">Donate</button>
                            </ul>
                            {/* Hamburger icon */}
                            <HiOutlineMenuAlt4
                                size={30}
                                onClick={() => setIsMobileNavOpen(true)}
                                className={`${changeColor ? "text-graya-800 mr-2" : "text-white"} lg:hidden cursor-pointer`}
                            />
                        </div>
                    </div>

                </div>

                {/* mobile-device */}


                <ul className={`lg:hidden fixed top-0 bg-white w-full h-full z-50 p-5 duration-500 space-y-5 overflow-y-auto ${
              isMobileNavOpen ? "left-0" : "left-[-100%]"
            }`}>

                    <div className="flex justify-between items-center">
                        <div className="bg-[#FC7676] w-fit pr-3 rounded-full">
                            <h2>mamondots</h2>
                        </div>
                        <AiOutlineClose
                            size={30}
                            onClick={() => setIsMobileNavOpen(false)}
                            className="cursor-pointer"
                        />
                    </div>
                    <li>
                        <Link to="/" className="inline-block">
                            Adopt a Pet
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default MenuBar;