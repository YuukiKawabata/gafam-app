import Link from "next/link";
import { data } from "./data";

export default function answer() {
  const lists = data.Lists;
  let number = Math.floor(Math.random() * 4);
  console.log(lists[number].name);
  console.log(lists[number].value);

  const name = lists[number].name;
  const value = lists[number].value;

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="h-1/6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-6xl">
        <h1>{name}</h1>
      </div>
      <div className="h-4/6 text-center leading-10 text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <p className="">{value}</p>
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
