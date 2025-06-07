"use client";
import React, { useEffect, useState } from "react";

const Intro = () => {
	const [text, setText] = useState("bonjour");
	const [dis, setDis] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setText("hola");
		}, 400);
		setTimeout(() => {
			setText("Konnichiwa");
		}, 800);
		setTimeout(() => {
			setText("Привет");
		}, 1200);
		setTimeout(() => {
			setText("hello");
		}, 1600);
		setTimeout(() => {
			setDis(false);
		}, 2000);
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
