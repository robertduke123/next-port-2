"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCode,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const About = () => {
	const { ref: ref1, inView: isIntersecting1 } = useInView();
	const { ref: ref2, inView: isIntersecting2 } = useInView();
	const { ref: ref3, inView: isIntersecting3 } = useInView();
	const { ref: ref4, inView: isIntersecting4 } = useInView();
	const { ref: ref5, inView: isIntersecting5 } = useInView();
	const { ref: ref6, inView: isIntersecting6 } = useInView();
	const { ref: ref7, inView: isIntersecting7 } = useInView();
	const { ref: ref8, inView: isIntersecting8 } = useInView();
	const { ref: ref9, inView: isIntersecting9 } = useInView();
	const { ref: ref10, inView: isIntersecting10 } = useInView();
	const { ref: ref11, inView: isIntersecting11 } = useInView();
	const { ref: ref12, inView: isIntersecting12 } = useInView();
	const { ref: ref13, inView: isIntersecting13 } = useInView();
	const { ref: ref14, inView: isIntersecting14 } = useInView();
	const { ref: ref15, inView: isIntersecting15 } = useInView();

	return (
		<div
			id="about"
			className="w-full flex flex-col justify-center items-center">
			<div className="h-[1px] w-5/6 mb-10 bg-gray-400/30"></div>
			<div className="w-2/3 flex justify-center">
				<div className="w-1/2 pl-25 pr-5 py-10 flex flex-col justify-around items-start">
					<h2 className="text-xl text-gray-500">About Me</h2>
					<div
						ref={ref1}
						className={`my-5 text-6xl ${
							!isIntersecting1 ? "-translate-x-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.4s" }}>
						<h1>Hi, I'm</h1>
						<h1 className="text-blue-300">Robert Duke</h1>
					</div>
					<div className=" h-25 flex flex-col justify-around">
						<span
							ref={ref2}
							className={`text-md text-gray-500 flex ${
								!isIntersecting2 ? "-translate-x-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "0.6s" }}>
							<FontAwesomeIcon
								icon={faLocationDot}
								className="w-4 mr-5 text-blue-400"
							/>
							Based in Auckland, New Zealand
						</span>
						<span
							ref={ref3}
							className={`text-md text-gray-500 flex ${
								!isIntersecting3 ? "-translate-x-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "0.6s" }}>
							<FontAwesomeIcon
								icon={faSquarePlus}
								className="w-4 mr-5 text-blue-300"
							/>
							28 Years Old
						</span>
						<span
							ref={ref4}
							className={`text-md text-gray-500 flex ${
								!isIntersecting4 ? "-translate-x-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "0.6s" }}>
							<FontAwesomeIcon
								icon={faCode}
								className="w-4 mr-5 text-blue-300"
							/>
							Full Stack Developer
						</span>
					</div>

					<p
						ref={ref5}
						className={`text-xl my-5 ${
							!isIntersecting5 ? "-translate-x-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.6s" }}>
						I am a passionate front-end developer who thrives on creating
						impactful, accessible, and engaging web applications, whether
						working as part of a team or individually.
					</p>
					<div
						ref={ref6}
						className={`w-full pr-5 flex ${
							!isIntersecting6 ? "translate-y-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.4s" }}>
						<button
							className={`cursor-pointer w-38 h-13 rounded-lg py-2 text-center bg-blue-400 hover:-translate-y-0.5`}
							style={{ transition: "0.2s" }}>
							<Link to="projects" smooth duration={500}>
								Get In Touch
							</Link>
						</button>
						{/* <button
							className="cursor-pointer w-38 h-13 rounded-lg py-2 text-center border border-blue-400/50 hover:-translate-y-0.5 hover:border-blue-400"
							style={{ transition: "0.2s" }}>
							<Link to="projects" smooth duration={500}>
								View Projects
							</Link>
						</button> */}
					</div>
				</div>

				<div
					ref={ref7}
					className={`w-1/2 pl-10 pr-5 py-10 flex flex-col items-start  ${
						!isIntersecting7 ? "translate-x-20 opacity-0" : "opacity-100"
					}`}
					style={{ transition: "0.4s" }}>
					<h2 className="pl-25 pr-5 text-2xl my-8">Skills</h2>

					<ul className="w-full flex flex-wrap">
						<li
							ref={ref8}
							className={`w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30 ${
								!isIntersecting8 ? "translate-y-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "0.6s" }}>
							Next.js
						</li>
						<li
							ref={ref9}
							className={`w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30 ${
								!isIntersecting9 ? "translate-y-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "0.8s" }}>
							React
						</li>
						<li
							ref={ref10}
							className={`w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30 ${
								!isIntersecting10 ? "translate-y-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "1s" }}>
							TailwindCSS
						</li>
						<li
							ref={ref11}
							className={`w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30 ${
								!isIntersecting11 ? "translate-y-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "1.2s" }}>
							PostgresSQL
						</li>
						<li
							ref={ref12}
							className={`w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30 ${
								!isIntersecting12 ? "translate-y-20 opacity-0" : "opacity-100"
							}`}
							style={{ transition: "1.4s" }}>
							express
						</li>
					</ul>

					<h2
						ref={ref13}
						className={`text-2xl my-8 ${
							!isIntersecting13 ? "translate-x-20 opacity-0" : "opacity-100"
						}`}
						style={{ transition: "0.4s" }}>
						Services
					</h2>
					<ul>
						<li
							ref={ref14}
							className={
								!isIntersecting14 ? "translate-x-20 opacity-0" : "opacity-100"
							}
							style={{ transition: "0.4s" }}>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-4 mr-5 text-blue-400"
							/>
							Full Stack Development
						</li>
						<li
							ref={ref15}
							className={
								!isIntersecting15 ? "translate-x-20 opacity-0" : "opacity-100"
							}
							style={{ transition: "0.4s" }}>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-4 mr-5 text-blue-400"
							/>
							Web Design Development
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
