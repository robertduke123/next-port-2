"use client";
import React from "react";
import { projects } from "@/data";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
	const { ref: ref1, inView: isIntersecting1 } = useInView();
	const { ref: ref2, inView: isIntersecting2 } = useInView();
	const { ref: ref3, inView: isIntersecting3 } = useInView();
	const { ref: ref4, inView: isIntersecting4 } = useInView();

	return (
		<div
			id="projects"
			className="relative w-full flex flex-col items-center 
			">
			<h1 className="relative z-5 w-full h-20 px-45 pt-7 text-center text-lg">
				My Projects
			</h1>
			<div className="absolute z-5 w-full "></div>
			<ProjectCard
				ref={ref1}
				project={projects[0]}
				isIntersecting={isIntersecting1}
				dir="left"
			/>
			<ProjectCard
				ref={ref2}
				project={projects[1]}
				isIntersecting={isIntersecting2}
				dir="right"
			/>
			<ProjectCard
				ref={ref3}
				project={projects[2]}
				isIntersecting={isIntersecting3}
				dir="left"
			/>
			<ProjectCard
				ref={ref4}
				project={projects[3]}
				isIntersecting={isIntersecting4}
				dir="right"
			/>
		</div>
	);
};

export default Projects;
