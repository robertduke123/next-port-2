"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const Scroll = () => {
	const { scroll } = useAuth();

	return (
		<div
			className="hidden sm:flex fixed z-20 w-20 top-35 right-5 h-80 justify-center items-center bg-black-100 "
			style={{ boxShadow: "-5px 5px 5px 5px #01030f" }}>
			<span className="hidden xl:block w-5 mr-5 text-center text-gray-400/50 text-sm">
				{Math.floor((scroll / 3252.3) * 100)}
			</span>
			<span className="hidden lg:block xl:hidden w-5 mr-5 text-center text-gray-400/50 text-sm">
				{Math.floor((scroll / 3382.3) * 100)}
			</span>
			<span className="hidden md:block lg:hidden w-5 mr-5 text-center text-gray-400/50 text-sm">
				{Math.floor((scroll / 3532.3) * 100)}
			</span>
			<span className="block md:hidden w-5 mr-5 text-center text-gray-400/50 text-sm">
				{Math.floor((scroll / 3562.3) * 100)}
			</span>

			<div
				className={`w-2 h-75`}
				style={{
					backgroundImage: `linear-gradient(to bottom, #3B96BF, #3B96BF ${
						(scroll / 3252.3) * 100
					}%,  #1C1C1D ${(scroll / 3352.3) * 100}%)`,
					transition: "0.2s ease-in-out",
				}}></div>
		</div>
	);
};

export default Scroll;
