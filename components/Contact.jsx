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
			<h2 className="text-xl text-gray-500">Get In Touch</h2>
			<div className="w-4/5 flex justify-center">
				<div
					ref={ref1}
					className={`w-2/5 h-60 my-10 pl-10 flex flex-col justify-between ${
						!isIntersecting1 ? "-translate-x-20 opacity-0" : "opacity-100"
					}`}
					style={{ transition: "0.4s" }}>
					<div className="w-full p-8 pt-4 border border-blue-400/50 rounded-lg">
						<h2 className="text-2xl">Looking Forward To Hearing From You</h2>
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
					className="w-1/2 h-100 mt-10 mb-5 flex flex-col justify-between items-center"
					onSubmit={handleSubmit}>
					<input
						ref={ref2}
						className={`w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100 ${
							!isIntersecting2 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.2s" }}
						name="name"
						type="text"
						placeholder="Name"
					/>
					<input
						ref={ref3}
						className={`w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100 ${
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
						className={`w-4/5 h-45 p-3 border border-gray-500 rounded-xl bg-black-100 ${
							!isIntersecting4 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.2s" }}
						placeholder="Message"></textarea>

					<button
						ref={ref5}
						type="submit"
						className={`cursor-pointer w-4/5 h-13 rounded-lg py-2 text-center bg-blue-400 hover:-translate-y-0.5  ${
							!isIntersecting5 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.4s" }}>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
