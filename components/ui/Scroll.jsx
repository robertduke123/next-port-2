"use client";
import React, { useEffect, useState } from "react";

const Scroll = () => {
	const [scroll, setScroll] = useState(0);
	console.log(scroll);

	useEffect(() => {
		window.addEventListener("scroll", () => setScroll(window.scrollY));
	});
	useEffect(() => {
		setScroll(window.scrollY);
	}, [scroll]);

	return (
		<div
			className="fixed z-20 w-20 top-35 right-5 h-80 flex justify-center items-center bg-black-100 "
			style={{ boxShadow: "-5px 5px 5px 5px #01030f" }}>
			<span className="w-5 mr-5 text-center text-gray-400/50 text-md">
				{Math.floor((scroll / 2960.8) * 100)}
			</span>
			<div
				className={`w-2 h-75`}
				style={{
					backgroundImage: `linear-gradient(to bottom, #3B96BF, #3B96BF ${
						(scroll / 2960.8) * 100
					}%,  #1C1C1D ${(scroll / 2960.8) * 100}%)`,
					transition: "0.2s ease-in-out",
				}}></div>
		</div>
	);
};

export default Scroll;
