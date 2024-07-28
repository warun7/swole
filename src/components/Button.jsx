import React from "react";

export default function Button(props) {
    const {text, func} = props
    return (
    <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-[2px] bg-black border-zinc-600 border-solid blackShadow duration-300">
      <p>{text}</p>
    </button>   
  );
}
