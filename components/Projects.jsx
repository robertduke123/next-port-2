"use client";
import React, { useEffect, useState } from "react";
import { projects } from "@/data";
import Link from "next/link";

const Projects = () => {
	const [desc, setDesc] = useState("");
	const [color, setColor] = useState("");
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [circle, setCircle] = useState({ x: 0, y: 0 });

	const tick = () => {
		const speed = 0.17;
		setCircle({
			x: circle.x + (mouse.x - circle.x) + 35,
			y: circle.y + (mouse.y - circle.y),
		});
		// window.requestAnimationFrame(tick);
	};

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			setMouse({ x: e.x, y: e.y });
			tick();
		});
	});

	const handleHover = (project) => {
		setDesc(project.desc);
		setColor(project.color);
	};

	return (
		<div id="projects" className="my-25 w-full flex flex-col items-center">
			<div className="w-2/3 min-w-[350px] flex flex-col items-center">
				<h1 className="w-full h-10 px-15 text-purple-400">My Projects</h1>
				<div id="projects-container" className="w-full">
					{projects.map((project, idx) => (
						<Link
							target="_blank"
							href={project.link}
							key={"project " + idx}
							id="project"
							className={`relative cursor-pointer w-full h-40 px-15 flex items-center border-t border-gray-300 hover:px-20 ${
								idx === projects.length - 1 && "border-b"
							}`}
							style={{ transition: "0.3s" }}
							onMouseOver={() => handleHover(project)}>
							<div className="absolute z-5 w-55 h-full flex flex-col  justify-center items-start bg-black-100">
								<span
									id="project-text"
									className="text-lg  hover:text-blue-400">
									{project.title}
								</span>
								<span className="text-xs">2024</span>
							</div>

							<div
								id="project-img"
								className=" absolute z-0 w-55 h-35 my-5 bg-cover rounded-xl"
								style={{
									backgroundImage: `url(${project.img})`,
									transition: "0.5s",
								}}></div>
						</Link>
					))}
				</div>

				<div
					id="project-cursor"
					className={`fixed z-50 text-center text-ellipsis text-sm ${color} rounded-full -top-[20px] -left-[20px] opacity-0`}
					style={{
						width: `${desc.length * 7}px`,
						transform: `translate(${circle.x}px, ${circle.y}px)`,
						transition: "width 0.2s",
					}}>
					{desc}
				</div>
			</div>
		</div>
	);
};

export default Projects;
