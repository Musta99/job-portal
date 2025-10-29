import React from "react";

function Hero() {
  return (
    <div className="hero bg-blue-500 min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] text-white px-4">
      <div className="hero-content text-center flex flex-col items-center justify-center">
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hello there
          </h1>

          <p className="py-4 text-base md:text-lg lg:text-xl opacity-90">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary mt-4  text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
