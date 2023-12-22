"use client";

import Question from "./Question";

const questions = [
  {
    question: "What is this event about?",
    answer:
      "A hackathon is an event where teams collaborate on a project, or hack, given a certain time limit. At Stormhacks, teams of 1-4 collaborate over 24 hours to brainstorm and innovate solutions to real-world problems. Or they are free to work on whatever fun silly ideas they have in mind, the door is open. We will be inviting various mentors, judges, and guests working in the tech industry to share their expertise and knowledge to our participants. Winning teams will be selected based on various criteria that will be revealed closer to our event.",
  },
  {
    question: "What experience do I need?",
    answer:
      "Don't even worry about it. Our event is open to any student coming from any background/major. We also have a workshop series to get you bootstrapped for our hackathon, called “Road to Stormhacks”.",
  },
  {
    question: "Who can participate?",
    answer:
      "Our event is open to any student coming from any background/major. As long as you (or your team, if you have one already) can attend in person, you're welcome to join!",
  },
  {
    question: "Do I bring a team? Or do I find teammates at the event?",
    answer:
      "It's completely up to you. If you plan to join Stormhacks with a team ahead of time, please make sure that all group members sign-up together and mention each other in your application. We will also be facilitating team-formation at our event, so if you are short on members and/or want work with bright-minded peers, look forward to that :)",
  },
  {
    question: "When can I start working on my project?",
    answer:
      "You may begin to work on your project/idea once the hacking period commences on the first day of the event.",
  },
  {
    question: "What are we allowed to work on?",
    answer:
      "We will be providing hackers with themes/topics at the opening ceremony of the event. Hardware projects are allowed, but unfortunately are unable to provide any materials/supplies, so you will have to bring your own.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop and any cables/chargers for your devices are highly recommended. If your project requires any additional equipment or hardware you will be responsible for bringing it in. We also recommend you to bring personal toiletries such as such a tooth brush and toothpaste if you plan on staying overnight.",
  },
  {
    question: "What are the requirements to join?",
    answer:
      "The only requirement we have is that you are a university undergraduate that can attend the event in-person. We're absolutely open to all individuals of any major or experience-level!",
  },
  {
    question: "Do you offer travel reimbursements?",
    answer:
      "We unfortunately do not provide travel reimbursements for this event.",
  },
  {
    question: "Is this event limited to post-secondary students only?",
    answer:
      "Unfortunately, due to the limited spots we have available this year, we are only allowing post-secondary students to partipate. Look out in the coming years for whether or not this changes!",
  },
  {
    question: "Virtual or In-Person this year?",
    answer:
      "StormHacks 2023 will be completely in-person, taking place on the SFU Burnaby campus. There will be no virtual participation this year.",
  },
  {
    question: "What kind of activities will there be?",
    answer:
      "The hackathon will be packed with activities such as wellness workshops, games, trivia and more all throughout the event! You can even win some prizes through some of our mini contests.",
  },
  {
    question: "What does it cost to get in?",
    answer:
      "Nothing! StormHacks 2023 is completely free to join. We will be providing meals throughout the event, but if you would like to purchase your own food during our event, you are free to do so.",
  },
  {
    question: "When do applications open?",
    answer:
      "Applications have already closed, unfortunately. If you missed out on this year's StormHacks, we encourage you to apply as a hacker for next year's event or volunteer for this year's StormHacks!",
  },
  {
    question: "When and where is the event happening?",
    answer:
      "The event is taking place on May 20-21st, 2023. The venue is on SFU's Burnaby campus, and will be fully disclosed as we approach the event date.",
  },
  {
    question: "Have more questions?",
    answer:
      "Contact us through any of the social media links or at info@stormhacks.com!",
  },
  {
    question: "How will the event run day-of?",
    answer:
      "Stormhacks 2023 will not have an overnight venue space. Participants will receive an event itinerary prior to the event, including the opening and closing times for each day. When our venue closes, students will have the option to go home and continue working on their projects, or find a space somewhere on SFU’s Burnaby campus, which is open 24/7.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20">
      <img src="/faq/snow-on-ground.svg" className="w-full"></img>
      <div className="bg-[#F2FDFF] p-6 md:p-20 lg:px-[12rem] 2xl:px-[20rem] pt-0 -mt-4 flex items-center justify-center text-center w-full">
        <div className="-mt-[6rem] lg:-mt-[16rem] w-full">
          <h2 className="text-[#404070] font-wilden mb-12 text-6xl">FAQ</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            {questions.map((question) => (
              <Question question={question.question}>
                {question.answer}
              </Question>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
