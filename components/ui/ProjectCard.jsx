import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";

const ProjectCard = ({ ref, project, isIntersecting, dir }) => {
	return (
		<div
			ref={ref}
			id="project"
			className={` relative w-full md:w-3/5 h-[350px] my-10 flex bg-black-100 border border-blue-300/25 shadow-lg shadow-blue-400/20 rounded-xs  ${
				dir === "left"
					? "self-start justify-start md:ml-45"
					: "self-end justify-end md:mr-55"
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
				className={`absolute z-15 w-full px-3 lg:px-20 h-full flex justify-between items-center ${
					dir === "right" && "flex-row-reverse"
				}`}>
				<div
					id="project-img"
					className="w-50 md:w-[450px] h-28 md:h-60 bg-cover bg-center rounded-sm"
					style={{
						backgroundImage: `url(${project.img})`,
					}}></div>

				<div className=" w-1/2 h-full px-5 lg:px-10 py-10 flex flex-col justify-around items-start">
					<h1 className="text-2xl lg:text-4xl">{project.title}</h1>
					<p className="text-xs lg:text-sm text-gray-400">{project.desc}</p>
					<div className="w-full flex lg:justify-around flex-wrap">
						<span className="h-5 xl:h-7 px-1.5 xl:px-3 py-0.5 xl:py-1.5 mx-1 text-[9px] xl:text-xs text-center text-gray-300 border border-white rounded-xl">
							React
						</span>
						<span className="h-5 xl:h-7 px-1.5 xl:px-3 py-0.5 xl:py-1.5 mx-1 text-[9px] xl:text-xs text-center text-gray-300 border border-white rounded-xl">
							Tailwind
						</span>
						<span className="h-5 xl:h-7 px-1.5 xl:px-3 py-0.5 xl:py-1.5 mx-1 text-[9px] xl:text-xs text-center text-gray-300 border border-white rounded-xl">
							postgresSQL
						</span>
					</div>
					<Link target="_blank" href={project.link}>
						<button
							className="cursor-pointer w-35 lg:w-45 h-10 lg:h-15 bg-white text-sm lg:text-md text-black rounded-xl shadow-md shadow-black hover:bg-blue-900 hover:text-white hover:shadow-sm hover:shadow-blue-300/30"
							style={{ transition: "0.3s ease-in-out" }}>
							<span>View Project</span>
							<span
								id="arrow"
								className="px-2"
								style={{ transition: "margin 0.3s ease-in-out" }}>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
