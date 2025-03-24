"use client";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/data";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ui/ProjectCard";

const ProjectsDos = () => {
	const { ref: ref1, inView: isIntersecting1 } = useInView();
	const { ref: ref2, inView: isIntersecting2 } = useInView();
	const { ref: ref3, inView: isIntersecting3 } = useInView();
	const { ref: ref4, inView: isIntersecting4 } = useInView();
	// const [isIntersecting, setIsItersecting] = useState();

	console.log("1: ", isIntersecting1);
	console.log("2: ", isIntersecting2);
	console.log("3: ", isIntersecting3);
	console.log("4: ", isIntersecting4);
	// const ref = useRef([
	// 	React.createRef(),
	// 	React.createRef(),
	// 	React.createRef(),
	// 	React.createRef(),
	// ]);
	// const [scroll, setScroll] = useState(0);
	// const [trans, setTrans] = useState({
	// 	one: 620,
	// 	two: 620,
	// 	three: 620,
	// 	four: 620,
	// });
	// useEffect(() => {
	// 	window.addEventListener("scroll", () => setScroll(window.scrollY));
	// 	handleScroll();
	// 	// console.log(scroll, trans);
	// });

	// const handleScroll = () => {
	// 	if (scroll >= 299 && scroll <= 423) {
	// 		setTrans({ ...trans, one: 620 - (299 - scroll) * -5 });
	// 	} else if (scroll < 299) {
	// 		setTrans({ ...trans, one: 620 });
	// 	} else {
	// 		setTrans({ ...trans, one: 0 });
	// 	}

	// 	if (scroll >= 744 && scroll <= 868) {
	// 		setTrans({ ...trans, two: 620 - (744 - scroll) * -5 });
	// 	} else if (scroll < 744) {
	// 		setTrans({ ...trans, two: 620 });
	// 	} else {
	// 		setTrans({ ...trans, two: 0 });
	// 	}
	// };

	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		const entry = entries[0];
	// 		console.log(entry);
	// 		setIsItersecting(entry.isIntersecting);
	// 	});
	// 	observer.observe(ref.current);
	// }, []);

	return (
		<div id="projects" className="relative w-full flex flex-col items-center">
			<div className="h-[1px] w-5/6 bg-gray-400"></div>
			<h1 className="w-full h-20 px-45 pt-7 text-lg font-medium text-purple-400">
				My Projects
			</h1>
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

export default ProjectsDos;
