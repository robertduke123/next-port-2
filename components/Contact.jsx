"use client";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [details, setDetails] = useState({
		name: "",
		email: "",
		message: "",
	});
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
		<div id="contact" className="w-full p-10 flex flex-col items-center">
			<h2 className="text-xl text-gray-500">Get In Touch</h2>
			<div className="w-4/5 flex justify-between">
				<form
					ref={form}
					className="w-1/2 h-100 my-10 flex flex-col justify-between items-center"
					onSubmit={handleSubmit}>
					<input
						className="w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100"
						name="name"
						type="text"
						placeholder="Name"
					/>
					<input
						className="w-4/5 h-12 px-3 border border-gray-500 rounded-xl bg-black-100"
						name="email"
						type="email"
						placeholder="Email"
					/>
					<textarea
						name="message"
						className="w-4/5 h-45 p-3 border border-gray-500 rounded-xl bg-black-100"
						placeholder="Message"></textarea>

					<button
						type="submit"
						className="cursor-pointer w-4/5 h-13 rounded-lg py-2 text-center bg-blue-400 hover:-translate-y-0.5"
						style={{ transition: "0.2s" }}>
						Send Message
					</button>
				</form>
				<div className="w-1/2 h-100 my-10 flex flex-col justify-between items-center">
					<div
						className="cursor-pointer w-12 h-12 flex justify-center items-center border border-blue-400/50 rounded-lg hover:border-blue-400 hover:scale-105"
						style={{ transition: ".3s ease-in-out" }}>
						<Link
							target="_blank"
							href="https://github.com/robertduke123?tab=repositories">
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
