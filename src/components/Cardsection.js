const cards = [
  {
    id: 1,
    title: "Individual Target Tracker",
    description:
      "Class aptent tacit socios litora amter torq massa cnub veliet orc.",
    href: "#",
    imageUrl: "https://example.com/image1.png",
  },
  {
    id: 2,
    title: "Revenue Share",
    description:
      "Suspendisse pellentesque, dolor in fringilla commodo, tellus sem ultricies.",
    href: "#",
    imageUrl: "https://example.com/image2.png",
  },
  {
    id: 3,
    title: "Meeting Scheduling",
    description:
      "Morbi eget sem aliquet finibus est ac, condimentum aliquet quam Duis.",
    href: "#",
    imageUrl: "https://example.com/image3.png",
  },
];

import React from "react";

export default function CardSection() {
  return (
    <div className="bg-red py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our various offerings designed to help your business grow.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={card.href}>
                    <span className="absolute inset-0" />
                    {card.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {card.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={card.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
