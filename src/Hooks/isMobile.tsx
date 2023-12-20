import { useState, useEffect } from "react";

// Enum for screen types
export const ScreenType = {
	MOBILE: "mobile",
	DESKTOP: "desktop",
};

const useScreenType = () => {
	const [screenType, setScreenType] = useState(ScreenType.DESKTOP);

	useEffect(() => {
		const checkScreenSize = () => {
			setScreenType(
				window.innerWidth < 768 ? ScreenType.MOBILE : ScreenType.DESKTOP
			);
		};

		// Check on mount (initial load)
		checkScreenSize();

		// Add event listener
		window.addEventListener("resize", checkScreenSize);

		// Clean up
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return screenType;
};

export default useScreenType;
