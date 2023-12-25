import Image from "next/image";
import useScreenType, { ScreenType } from "@/Hooks/isMobile";
import Button from "../Button/Button";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Header() {
	const screenType = useScreenType();

	return (
		<>
			{/* <ParallaxBanner
				layers={[
					// { image: "hero/northern-lights.png", speed: 0 },
					{ image: "hero/mountain-and-snow.png", speed: 0 },
					{ image: "hero/stormy-and-sparky.png", speed: 0 },
					{ image: "hero/trees-foreground.png", speed: 0 },
					{ image: "/hero/foreground.png", speed: 20 },
				]}
				className="absolute w-screen"
			></ParallaxBanner> */}

			<div
				className="w-screen h-screen p-8 normal"
				style={{ backgroundImage: `url(/BG.svg)` }}
			>
				<div className="flex flex-col justify-center items-center">
					<h5>Adventure with us at</h5>
					<picture className="my-5">
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
				<div className="flex flex-row justify-center items-center space-x-24">
					<Button
						text="Sign up"
						url=""
						textColour="text-black"
						backgroundColour="bg-white"
						borderColour="border-white"
					/>
					<Button
						text={"Volunteer"}
						url={""}
						textColour="text-black"
						backgroundColour="bg-white"
						borderColour="border-white"
					/>
				</div>
			</div>
		</>
	);
}
