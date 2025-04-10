"use client";
import React, { useEffect, useState } from "react";

const Intro = () => {
	const [text, setText] = useState("hello");
	const [dis, setDis] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setText("hola");
		}, 1000);
		setTimeout(() => {
			setText("arigato");
		}, 2000);
		setTimeout(() => {
			setText("benjoure");
		}, 3000);
		setTimeout(() => {
			setDis(false);
		}, 4000);
	}, []);

	return (
		<div
			className={`fixed z-50 w-full h-screen text-5xl bg-black-100 flex justify-center items-center ${
				dis ? "" : "-mt-250 opacity-0"
			}`}
			style={{ transition: "0.3s, opacity 1s" }}>
			{text.toUpperCase()}
		</div>
	);
};

export default Intro;
