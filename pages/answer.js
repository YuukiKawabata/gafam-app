import Link from "next/link";
import { data } from "./data";

export default function answer() {
  // let i = Math.floor(Math.random() * 3);

  const lists = data.Lists;
  console.log(lists[0].name);
  console.log(lists[0].value);

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="h-1/6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-6xl">
        <h1>{lists[1].name}</h1>
      </div>
      <div className="h-4/6 text-center leading-10 text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <p className="">{lists[1].value}</p>
      </div>

      <Link href="/">
        <div className="h-1/6 flex justify-center items-center">
          <button className="button block sm:text-2xl">最初に戻る</button>
        </div>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { data } };
}
