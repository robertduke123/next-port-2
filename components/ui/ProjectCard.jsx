import React from "react";
import { Element } from "react-scroll";

const ProjectCard = ({ ref, project, isIntersecting, dir }) => {
	return (
		<div
			ref={ref}
			id="project"
			className={` relative w-2/3 h-[350px] my-10 px-15 flex justify-between items-center bg-gray-950 border border-blue-300/25 shadow-lg shadow-blue-400/10 rounded-xs ${
				dir === "left" ? "self-start ml-20" : "self-end flex-row-reverse mr-20"
			}  ${
				!isIntersecting && dir === "left"
					? "-translate-x-170"
					: !isIntersecting && dir === "right"
					? "translate-x-170"
					: ""
			}`}>
			<div
				className="w-[450px] h-60 bg-cover bg-center rounded-sm"
				style={{ backgroundImage: `url(${project.img})` }}></div>

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
					className="cursor-pointer w-45 h-15 bg-white text-black rounded-xl shadow-md shadow-black hover:bg-blue-400 hover:text-white"
					style={{ transition: "0.3s ease-in-out" }}>
					<span>View Project</span>
					<span
						id="arrow"
						className="px-2"
						style={{ transition: "margin 0.3s ease-in-out" }}>
						{"-->"}
					</span>
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
