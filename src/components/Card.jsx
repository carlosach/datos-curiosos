import React, { useEffect, useState } from "react";
import { data } from "../data";
import { MdKeyboardArrowRight } from "react-icons/md";

function Card() {
  // function randomFact() {
  //   const randomObject = Math.floor(Math.random() * data.length);
  //   console.log(randomNumber);
  //   data[randomNumber]
  // }
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };

  const [randomData, setRandomData] = useState(() => getRandomObject(data));

  return (
    <div className="bg-white p-10 max-w-md mx-auto my-auto rounded-3xl shadow-slate-400 shadow-2xl">
      <h1 className="text-black font-bold text-4xl mx-auto mb-7 text-center [text-shadow:_0_1px_30px_rgb(148_163_184_/_50%)]">
        Datos Curiosos
      </h1>
      <img
        className="max-h-60 mx-auto rounded-3xl shadow-2xl shadow-slate-200"
        src={randomData.img}
      ></img>
      <h2 className="text-center my-7 text-xl font-bold [text-shadow:_0_1px_30px_rgb(148_163_184_/_50%)]">
        ¿Sabias Que?
      </h2>
      <p className="text-sm md:text-base text-justify [text-shadow:_0_1px_30px_rgb(148_163_184_/_50%)]">
        {randomData.title}
      </p>
      <button
        onClick={() => setRandomData(getRandomObject(data))}
        className="bg-slate-600 text-white rounded-full p-2 text-xl mr-0 ml-auto block mt-3 hover:bg-slate-500 transition-colors"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

export default Card;
