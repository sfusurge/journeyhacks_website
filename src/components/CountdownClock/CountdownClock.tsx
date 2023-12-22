"use client";

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
    <div className="flex flex-col items-center">
      <h2 className="font-wilden text-5xl mb-1.5">Mark your calendars!</h2>
      <p className="font-medium font-inter text-lg mb-6">
        JourneyHacks is happening in...
      </p>

      <div className="flex flex-col md:flex-row md:gap-6 w-full items-center justify-center">
        <div className="countdown-snowball -rotate-[5deg]">
          <span className="font-wilden -mt-2 text-8xl p-16 block">
            {time.days}
          </span>
          <span className="-mt-16 mb-[3rem] font-wilden text-3xl">days</span>
        </div>
        <div className="countdown-snowball rotate-[2.5deg]">
          <span className="font-wilden -mt-2 text-8xl p-16 block">
            {time.hours}
          </span>
          <span className="-mt-16 mb-[3rem] font-wilden text-3xl">hours</span>
        </div>
        <div className="countdown-snowball rotate-[10deg]">
          <span className="font-wilden -mt-2 text-8xl p-16 block">
            {time.minutes}
          </span>
          <span className="-mt-16 mb-[3rem] font-wilden text-3xl">minutes</span>
        </div>
      </div>
    </div>
  );
}
