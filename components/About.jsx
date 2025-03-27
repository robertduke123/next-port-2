import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCode,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const About = () => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-2/3 flex justify-center">
				<div className="w-1/2 pl-25 pr-5 py-10 flex flex-col justify-around items-start">
					<h2 className="text-xl text-gray-500">About Me</h2>
					<div className="my-5 text-6xl">
						<h1>Hi, I'm</h1>
						<h1 className="text-blue-300">Robert Duke</h1>
					</div>
					<div className=" h-25 flex flex-col justify-around">
						<span className="text-md text-gray-500 flex">
							<FontAwesomeIcon
								icon={faLocationDot}
								className="w-4 mr-5 text-blue-400"
							/>
							Based in Auckland, New Zealand
						</span>
						<span className="text-md text-gray-500 flex">
							<FontAwesomeIcon
								icon={faSquarePlus}
								className="w-4 mr-5 text-blue-300"
							/>
							28 Years Old
						</span>
						<span className="text-md text-gray-500 flex">
							<FontAwesomeIcon
								icon={faCode}
								className="w-4 mr-5 text-blue-300"
							/>
							Full Stack Developer
						</span>
					</div>

					<p className="text-xl my-5">
						I am a passionate front-end developer who thrives on creating
						impactful, accessible, and engaging web applications, whether
						working as part of a team or individually.
					</p>
					<div className="w-full pr-5 flex justify-around">
						<button
							className="cursor-pointer w-38 h-13 rounded-lg py-2 text-center bg-blue-400 hover:-translate-y-0.5"
							style={{ transition: "0.2s" }}>
							Get In Touch
						</button>
						<button
							className="cursor-pointer w-38 h-13 rounded-lg py-2 text-center border border-blue-400/50 hover:-translate-y-0.5 hover:border-blue-400"
							style={{ transition: "0.2s" }}>
							View Projects
						</button>
					</div>
				</div>

				<div className="w-1/2 pl-10 pr-5 py-10 flex flex-col items-start">
					<h2 className="pl-25 pr-5 text-2xl my-8">Skills</h2>

					<ul className="w-full flex flex-wrap">
						<li className="w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30">
							Next.js
						</li>
						<li className="w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30">
							React
						</li>
						<li className="w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30">
							TailwindCSS
						</li>
						<li className="w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30">
							PostgresSQL
						</li>
						<li className="w-24 h-10 m-2 py-3 text-xs text-center text-gray-400 rounded-3xl bg-blue-900/30">
							express
						</li>
					</ul>

					<h2 className="text-2xl my-8">Services</h2>
					<ul>
						<li>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-4 mr-5 text-blue-400"
							/>
							Full Stack Development
						</li>
						<li>
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
