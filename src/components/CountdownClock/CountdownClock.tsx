import { useState, useEffect } from "react";

export default function CountdownClock() {
	// TODO confirm with Matthew for correct event date
	const eventDate = new Date("2024-01-17T12:00:00");
	const [time, setTime] = useState(calculateTimeRemaining());

	function calculateTimeRemaining() {
		const currentTime = new Date();
		const difference = eventDate.getTime() - currentTime.getTime();

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	}

	useEffect(() => {
		const updateInterval = setInterval(() => {
			setTime(calculateTimeRemaining());
		}, 60000);

		return () => {
			clearInterval(updateInterval);
		};
	}, []);

	return (
		<div className="grid place-content-center place-items-center desktop:grid-rows-2 desktop:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-2 ">
			<div className="desktop:col-start-1 desktop:row-span-1 mobile:row-start-1 mobile:row-span-1">
				<div className="flex flex-row">
					<p>digit 1</p>
					<p>digit 2</p>
				</div>
			</div>
			<div className="desktop:col-start-2 desktop:col-span-1 mobile:row-start-2 mobile:row-span-1">
				<div className="flex flex-row">
					<p>digit 1</p>
					<p>digit 2</p>
				</div>
			</div>
		</div>
	);
}
