import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/Nav";
import Projects from "@/components/Projects";
import Scroll from "@/components/ui/Scroll";

export default function Home() {
	return (
		<div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
			<div className="w-full">
				<Scroll />
				<NavBar />
				<Hero />
				<Projects />
				<About />
				<Contact />
			</div>
		</div>
	);
}
