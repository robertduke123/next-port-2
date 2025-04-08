"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ ref, project, isIntersecting, dir }) => {
	const [scale, setScale] = useState(false);

	return (
		<div
			ref={ref}
			id="project"
			className={` relative w-3/5 h-[350px] my-10 flex bg-black-100 border border-blue-300/25 shadow-lg shadow-blue-400/20 rounded-xs  ${
				dir === "left"
					? "self-start justify-start ml-45"
					: "self-end justify-end mr-55"
			} ${
				!isIntersecting && dir === "left"
					? "-translate-x-80 opacity-0"
					: !isIntersecting && dir === "right"
					? "translate-x-80 opacity-0"
					: "opacity-100"
			}`}>
			<h1
				className={`absolute z-10 top-15 text-[160px] font-bold text-gray-300/10 ${
					dir === "left" ? "right-8" : "left-8"
				}`}>
				{"0" + project.id}
			</h1>
			<div
				className={`absolute z-15 w-full px-20 h-full flex justify-between items-center ${
					dir === "right" && "flex-row-reverse"
				}`}>
				<div className="w-[450px] h-60 rounded-sm overflow-hidden">
					<div
						id="project-img"
						className="w-[450px] h-60 bg-cover bg-center rounded-sm"
						style={{
							backgroundImage: `url(${project.img})`,
							scale: scale ? "1.25" : "1",
							transition: "0.4s",
						}}></div>
				</div>

				<div className=" w-2/5 h-full px-10 py-10 flex flex-col justify-around items-start">
					<h1 className="text-4xl">{project.title}</h1>
					<p className="text-sm text-gray-400">{project.desc}</p>
					<div className="w-full flex justify-around">
						<span className="h-7 px-3 py-1.5 text-xs text-center text-gray-300 border border-white rounded-xl">
							React
						</span>
						<span className="h-7 px-3 py-1.5 text-xs text-center text-gray-300 border border-white rounded-xl">
							Tailwind
						</span>
						<span className="h-7 px-3 py-1.5 text-xs text-center text-gray-300 border border-white rounded-xl">
							postgresSQL
						</span>
					</div>

					<button
						onClick={() => console.log("test")}
						className="cursor-pointer w-45 h-15 bg-white text-black rounded-xl shadow-md shadow-black hover:bg-blue-900 hover:text-white hover:shadow-sm hover:shadow-blue-300/30"
						style={{ transition: "0.3s ease-in-out" }}
						onMouseEnter={() => setScale(true)}
						onMouseLeave={() => setScale(false)}>
						<Link target="_blank" href={project.link}>
							<span>View Project</span>
							<span
								id="arrow"
								className="px-2"
								style={{ transition: "margin 0.3s ease-in-out" }}>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
