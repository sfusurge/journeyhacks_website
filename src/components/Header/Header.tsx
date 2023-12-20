import Image from "next/image";
import useScreenType, { ScreenType } from "@/Hooks/isMobile";

export default function Header() {
	const screenType = useScreenType();

	return (
		<div>
			<picture className="mt-5">
				<source media="(max-width: 768px)" srcSet="/Header/mobile_header.svg" />
				<img src="/Header/desktop_header.svg" alt="JourneyHacks header title" />
			</picture>
		</div>
	);
}
