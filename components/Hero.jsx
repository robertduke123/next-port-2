import React from "react";

const Hero = () => {
	return (
		<div
			id="home"
			className="w-full h-screen flex flex-col justify-center items-center">
			<div className="w-38 flex justify-between items-center">
				<div className="w-[30px] h-[30px] rounded-full bg-red-600" />
				<span className="w-26 h-6 text-center text-sm rounded-xl border border-white ">
					Hi I'm Robert
				</span>
			</div>

			<h1 className="font-medium text-8xl text-purple-400">FULL</h1>
			<div className="w-110 flex justify-between items-center">
				<h1 className="font-medium text-8xl text-orange-200">STACK</h1>
				<div
					id="button-slide"
					className=" relative cursor-pointer w-32 h-10 px-2 flex justify-between items-center text-xs border border-gray-400 rounded-full hover:translate-1  overflow-hidden"
					style={{ transition: "0.3s" }}>
					<div className="absolute z-5 w-[10px] h-[10px] bg-green-500 rounded-full" />
					<span className="absolute z-5 ml-4">Connect With Me</span>
					<div
						id="color-slide"
						className=" absolute z-4 w-[140px] h-[110px] bg-blue-600 rounded-full -translate-3 translate-y-[150px]"
						style={{ transition: "0.5s" }}></div>
				</div>
			</div>

			<h1 className="font-medium text-8xl text-blue-300">DEVELOPER</h1>

			<p className="w-75 text-center">
				Creating <span className="text-purple-400">functional</span>,{" "}
				<span className="text-orange-200">{"aesthetic "}</span>
				and <span className="text-blue-300">efficent</span> digital experiences
			</p>
		</div>
	);
};

export default Hero;
