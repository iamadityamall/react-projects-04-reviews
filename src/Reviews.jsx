import React from "react";
import reviews from "./data";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkIndex = (newNum) => {
    if (newNum < 0) {
      return reviews.length - 1;
    }
    if (newNum > reviews.length - 1) {
      return 0;
    }
    return newNum;
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randNum = () => {
    let ranNumb = Math.floor(Math.random() * reviews.length);
    return ranNumb;
  };

  const randomReview = () => {
    let ranNum = randNum();
    if (ranNum === index) {
      ranNum = index + 1;
    }
    console.log(ranNum);
    setIndex(() => {
      return checkIndex(ranNum);
    });
  };

  return (
    <section className="p-5 bg-white shadow-lg rounded-xl">
      <article className="flex flex-col items-center justify-between w-[500px] text-center bg-white p-2 space-y-3">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="">
          <h2 className="font-bold leading-relaxed capitalize">{name}</h2>
          <p className="font-mono font-semibold text-blue-900">{job}</p>
          <p className="p-1 text-gray-500">{text}</p>
        </div>
      </article>
      <div className="flex justify-center bg-white space-x-5 py-1">
        <button className="text-2xl" onClick={() => prevReview()}>
          <GrFormPrevious />
        </button>
        <button className="text-2xl" onClick={() => nextReview()}>
          <GrFormNext />
        </button>
      </div>
      <div className="flex justify-center bg-white mt-2">
        <button
          className="px-4 py-2 text-white bg-blue-200 rounded-xl"
          onClick={() => randomReview()}
        >
          random
        </button>
      </div>
    </section>
  );
};

export default Reviews;
