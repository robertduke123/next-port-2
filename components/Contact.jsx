"use client";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Contact = () => {
	const { ref: ref1, inView: isIntersecting1 } = useInView();
	const { ref: ref2, inView: isIntersecting2 } = useInView();
	const { ref: ref3, inView: isIntersecting3 } = useInView();
	const { ref: ref4, inView: isIntersecting4 } = useInView();
	const { ref: ref5, inView: isIntersecting5 } = useInView();

	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		e.preventDefault();

		emailjs
			.sendForm("service_mcft4h7", "template_n4imy8n", form.current, {
				publicKey: "ZBhvbKb0840Teasbp",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
	};

	return (
		<div id="contact" className="w-full p-10 my-10 flex flex-col items-center">
			<div className="h-[1px] w-5/6 mb-10 bg-gray-400/30"></div>
			<h2 className="text-xl text-gray-500">Get In Touch</h2>
			<div className="w-4/5 flex flex-col md:flex-row justify-center">
				<div
					ref={ref1}
					className={`w-full md:w-2/5 h-75 md:h-70 my-10 md:pl-10 flex flex-col justify-between ${
						!isIntersecting1 ? "-translate-x-20 opacity-0" : "opacity-100"
					}`}
					style={{ transition: "0.4s" }}>
					<div className="w-full p-8 pt-4 border border-blue-400/50 rounded-lg">
						<h2 className="text-xl md:text-2xl mb-2">
							Looking Forward To Hearing From You
						</h2>
						<p className="pr-5 text-gray-700">
							Feel free to get in touch for to contact me and I will get back to
							you as soon as possible
						</p>
					</div>
					<div
						className="cursor-pointer w-12 h-12 ml-5 flex justify-center items-center border border-blue-400/50 rounded-lg hover:border-blue-400 hover:scale-105"
						style={{ transition: ".3s ease-in-out" }}>
						<Link
							target="_blank"
							href="https://github.com/robertduke123?tab=repositories">
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</div>
				</div>
				<form
					ref={form}
					className="w-full md:w-1/2 h-100 mt-10 mb-5 flex flex-col justify-between items-center"
					onSubmit={handleSubmit}>
					<input
						ref={ref2}
						className={`w-full md:w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100 ${
							!isIntersecting2 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.2s" }}
						name="name"
						type="text"
						placeholder="Name"
					/>
					<input
						ref={ref3}
						className={`w-full md:w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100 ${
							!isIntersecting3 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.2s" }}
						name="email"
						type="email"
						placeholder="Email"
					/>
					<textarea
						ref={ref4}
						name="message"
						className={`w-full md:w-4/5 h-45 p-3 border border-gray-500 rounded-xl bg-black-100 ${
							!isIntersecting4 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.2s" }}
						placeholder="Message"></textarea>

					<button
						ref={ref5}
						type="submit"
						className={`cursor-pointer  w-full md:w-4/5 h-13 rounded-lg py-2 text-center bg-blue-400 hover:-translate-y-0.5  ${
							!isIntersecting5 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.4s" }}>
						Send Message
					</button>
				</form>
			</div>
			<div className="w-full h-20 mt-20 pt-20 flex justify-center text-gray-400/50">
				<span>© 2025 RobertDuke. All rights reserved.</span>
			</div>
		</div>
	);
};

export default Contact;
