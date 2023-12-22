import Image from "next/image";
import useScreenType, { ScreenType } from "@/Hooks/isMobile";

export default function Header() {
	const screenType = useScreenType();

	return (
		<div className="mx-10 p-8">
			<div className="flex flex-col justify-center items-center">
				<h5>Adventure with us at</h5>
				<picture className="mt-5">
					<source
						media="(max-width: 768px)"
						srcSet="/Header/mobile_header.svg"
					/>
					<img
						src="/Header/desktop_header.svg"
						alt="JourneyHacks header title"
					/>
				</picture>
				<p>caption</p>
			</div>
			<div className="flex flex-row justify-between items-baseline">
				<button>Hello</button>
				<button>Volunteer</button>
			</div>
		</div>
	);
}
