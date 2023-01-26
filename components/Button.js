import Link from "next/link";
import React from "react";

export function Button(props) {
  return (
    <div className="mt-5 whitespace-pre-wrap leading-loose font-black h-1/6 p-5 text-base text-center tracking-wider  justify-center items-center  sm:text-2xl ">
      <Link href={`${props.href}`}>
        <button className="button block">
          <span>{props.text} </span>
        </button>
      </Link>
    </div>
  );
}

