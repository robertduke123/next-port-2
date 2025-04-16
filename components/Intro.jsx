"use client";
import React, { useEffect, useState } from "react";

const Intro = () => {
	const [text, setText] = useState("bonjour");
	const [dis, setDis] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setText("hola");
		}, 500);
		setTimeout(() => {
			setText("Konnichiwa");
		}, 1000);
		setTimeout(() => {
			setText("Привет");
		}, 1500);
		setTimeout(() => {
			setText("hello");
		}, 2000);
		setTimeout(() => {
			setDis(false);
		}, 2500);
	}, []);

	return (
		<div
			className={`fixed z-50 w-full h-screen text-5xl bg-black-100 flex justify-center items-center ${
				dis ? "" : "-mt-250 opacity-0"
			}`}
			style={{ transition: "0.5s, opacity 1s" }}>
			{text.toUpperCase()}
		</div>
	);
};

export default Intro;
