import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[700px]w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-zinc-600">Swole</span><span className= "text-zinc-200">normous</span>
        </h1>
      </div>
      <p className="text-l md: text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-zinc-600 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-zinc-600 font-medium">mass monstrosity</span>,
        afflicted with sever body dismorphia, unable to fit through doors
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Begin Your Journey"}
      ></Button>
    </div>
  );
}
