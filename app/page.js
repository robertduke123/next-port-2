import Hero from "@/components/Hero";
import NavBar from "@/components/Nav";
import Projects from "@/components/Projects";
import ProjectsDos from "@/components/ProjectsDos";

export default function Home() {
	return (
		<div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
			<div className="w-full">
				<NavBar />
				<Hero />
				{/* <Projects /> */}
				<ProjectsDos />
			</div>
		</div>
	);
}
