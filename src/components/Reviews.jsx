import React from "react";
import { ImQuotesLeft } from "react-icons/im";
function Reviews() {
  const customerReviews = [
    {
      name: "John Smith",
      color: "text-blue-400	",
      fill: "fill-blue-400	",
      profile_link: "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "Bought a new gaming laptop and it's exceeded my expectations. The staff were knowledgeable and helped me find the perfect laptop for my needs.",
    },
    {
      name: "Sarah Johnson",
      color: "text-red-400",
      fill: "fill-red-400",
      profile_link: "https://randomuser.me/api/portraits/women/60.jpg",
      review:
        "Needed to upgrade my computer and the staff here were extremely helpful. They helped me find the right parts and even gave me tips on how to install them..",
    },
    {
      name: "David Lee",
      color: "text-teal-400",
      fill: "fill-teal-400",
      profile_link: "https://randomuser.me/api/portraits/men/17.jpg",
      review:
        "Needed a new router and the staff here were great in helping me find the right one for my home. Easy setup and great signal strength.",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-6xl w-full h-fit px-10 m-auto gap-4 p-2">
      <h2 className="text-3xl md:text-4xl text-center">Customer reviews</h2>
      <p className="text-gray-400 text-center">
        What our customers are saying ...
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:flex-row gap-4">
        {customerReviews.map((rev) => (
          <div
            className="flex flex-col items-center shadow-2xl gap-2 rounded-lg "
            key={rev.name}
          >
            <div className="text-center flex flex-col gap-1 p-6 h-full">
              <ImQuotesLeft className={`${rev.color}`} />
              <p className="px-3">{rev.review}</p>
            </div>
            <div className="relative w-full curve flex flex-col items-center gap-2 isolate">
              <img
                src={rev.profile_link}
                alt={rev.name}
                className="w-16 h-16 rounded-full border-[4px] border-white"
              />
              <h3 className="text-lg font-medium text-white">{rev.name}</h3>
              <div className="overflow-hidden h-[100px] absolute -z-30 rounded-lg w-full">
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="h-full w-full "
                >
                  <path
                    d="M-27.25,80.99 C174.00,-55.00 302.12,98.00 500.00,49.98 L500.00,150.00 L-0.00,150.00 Z"
                    className={`stroke-none ${rev.fill}`}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
