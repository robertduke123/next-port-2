"use client";
import React, { useEffect, useState } from "react";

const Intro = () => {
	const [text, setText] = useState("hello");
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
	}, []);

	return (
		<div className="fixed z-50 w-full h-screen text-5xl bg-black-100 flex justify-center items-center">
			{text.toUpperCase()}
		</div>
	);
};

export default Intro;
