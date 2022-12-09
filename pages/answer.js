import Link from "next/link";

export default function answer() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="h-1/6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-6xl">
        <h1>名前</h1>
      </div>
      <div className="h-4/6 text-center leading-10 text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <p className="">test test test</p>
      </div>

      <Link href="/">
        <div className="h-1/6 flex justify-center items-center">
          <button className="button block sm:text-2xl">最初に戻る</button>
        </div>
      </Link>
    </div>
  );
}
