"use client";

import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";

const base = cn("bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white ");

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.scrollY > 0) setIsVisible(true);
			else setIsVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-8 right-8 z-[99]">
			{isVisible && (
				<div
					onClick={scrollToTop}
					aria-label="scroll to top"
					className={cn(
						base,
						"flex h-10 w-10 cursor-pointer items-center justify-center rounded-md shadow-md transition duration-300 ease-in-out hover:bg-opacity-80",
					)}>
					<span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-black dark:border-white"></span>
				</div>
			)}
		</div>
	);
}
