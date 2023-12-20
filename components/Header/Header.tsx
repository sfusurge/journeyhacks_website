import Image from "next/image";
import useScreenType, { ScreenType } from "../Hooks/isMobile";

export default function Header() {
	const screenType = useScreenType();

	return (
		<div>
			{screenType}
			<Image
				src={
					screenType == ScreenType.MOBILE
						? "/Header/mobile_header.svg"
						: "/Header/desktop_header.svg"
				}
				priority
				alt="JourneyHacks logo"
				width={800}
				height={250}
			/>
		</div>
	);
}
