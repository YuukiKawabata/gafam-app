import Link from "next/link";

export default function selection() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <h1 className="h-1/6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-6xl">
        今の気持ちは？
      </h1>

      <div className="h-4/6 text-center leading-10 text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
        <Link href="/answer">
          <button className="selection-button block">test</button>
        </Link>
      </div>

      <Link href="/">
        <div className="h-1/6 flex justify-center items-center">
          <button className="button block sm:text-2xl">戻る</button>
        </div>
      </Link>
    </div>
  );
}
