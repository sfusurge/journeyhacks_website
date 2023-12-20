"use client";

import Image from "next/image";
import Header from "../../components/Header/Header";
import CountdownClock from "../../components/CountdownClock/CountdownClock";

export default function Home() {
	return (
		// TODO Create navbar

		// TODO Create header
		// TODO Create count-down clock

		// TODO Create General information section

		// TODO Add event detail image + signup/volunteer page

		// TODO Create Hacker information section 1 and 2

		// TODO Create FAQ section

		// TODO Create Team section

		<div className="flex justify-center align-items-center">
			<>{Header()}</>
			<>{CountdownClock()}</>
		</div>
	);
}
