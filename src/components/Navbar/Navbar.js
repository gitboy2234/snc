import React from "react";
import Logo from "../Images/SNC LOGO01.png";
import "./Navbar.css";
function Navbar() {
    return (
        <div className="absolute z-10 w-full">
            <div className=" flex justify-center  pt-5 pb-5 ">
                <div className=" w-1/2 flex justify-center  ">
                    <div className="mr-[200px] ">
                        <img
                            className=" h-[90px] w-[200px]"
                            src={Logo}
                            alt="logo"
                        />
                    </div>

                    <ul className=" flex space-x-5 ml-[200px] mt-10">
                        <li className="hover:cursor-pointer ">Home</li>
                        <li className="hover:cursor-pointer ">About Us</li>
                        <li className="hover:cursor-pointer ">Projects</li>
                        <li className="hover:cursor-pointer ">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
