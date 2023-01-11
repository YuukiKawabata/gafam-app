import Link from "next/link";
import React from "react";


export function Button(props) {
  console.log(props.href);
  return (
    <div className="h-1/6 justify-center items-center text-base sm:text-4xl">
      <Link href={`${props.href}`}>
        <button className="button block ">{props.text}</button>
      </Link>
    </div>
  );
}
