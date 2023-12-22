interface Props {
  question: string;
  children: any;
}

import { Disclosure, Transition } from "@headlessui/react";

export default function Question(props: Props) {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full font-inter justify-between rounded-lg bg-purple-100 px-4 py-2 xl:text-lg text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            <span>{props.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`${
                open ? "transform" : "rotate-180"
              } h-5 w-5 text-purple-500`}
            >
              <path
                fill-rule="evenodd"
                d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </Disclosure.Button>
          <Transition
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="px-4 pb-4 pt-3 font-inter text-gray-500 xl:text-lg text-left">
              {props.children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
