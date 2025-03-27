"use client";
// import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { navItems } from "@/data";
import { Link } from "react-scroll";

const NavBar = () => {
	const [scroll, setScroll] = useState(0);
	const [prevScroll, setPrevScroll] = useState(0);
	const [trans, setTrans] = useState(false);
	useEffect(() => {
		setPrevScroll(scroll);
		window.addEventListener("scroll", () => setScroll(window.scrollY));
	});

	useEffect(() => {
		if (prevScroll > scroll || scroll === 695.200012207 || scroll === 0) {
			return setTrans(false);
		}
		setTrans(true);
	}, [scroll]);
	return (
		<Fragment>
			<div
				className={`fixed z-20 w-full h-12 flex justify-around items-center bg-black-100 border-b border-gray-700 text-xs ${
					trans && "-translate-y-50"
				}`}
				style={{ transition: "0.3s" }}>
				<ul className="w-75 h-8 px-8 flex justify-around items-center border border-gray-700 rounded-[20px] ">
					{navItems.map((item, idx) => (
						<li
							key={"nav " + idx}
							className="cursor-pointer hover:scale-110 text-gray-300 hover:text-white "
							style={{ transition: "0.3s" }}>
							<Link to={item.link} smooth duration={500}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
};

export default NavBar;
