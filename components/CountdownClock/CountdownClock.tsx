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
		<div>
			<p>{time.days} days</p>
			<p>{time.hours} hours</p>
			<p>{time.minutes} minutes</p>
		</div>
	);
}
