"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { useInView } from "react-intersection-observer";

const Grad = () => {
	const { ref: ref1, inView: isIntersecting1 } = useInView();
	const {} = useAuth();

	return (
		<div
			ref={ref1}
			className={`w-8/9 h-80 my-10 bg-blue-300 ${
				!isIntersecting1 ? "-translate-x-[700px] opacity-0" : "opacity-100"
			}`}
			style={{ transition: "0.6s ease-in-out" }}>
			<h1 className=" w-full px-5 text-8xl overflow-x-hidden">
				<span
					className={`whitespace-nowrap -ml-[${Number(
						((scroll / 3632.3) * 100 - 22) * 10
					)}px]`}
					style={{ transition: "0.4s" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
					officia corporis, molestiae sunt nesciunt quidem repellat libero autem
					at quibusdam sint molestias eos inventore eaque harum. Quibusdam ad
					vel temporibus.
				</span>
			</h1>
		</div>
	);
};

export default Grad;
