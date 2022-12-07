import Link from "next/link";
import Image from "next/image";

export default function selection() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <h1 className="text-4xl m-10 text-center tracking-wider sm:text-6xl">
        今の気持ちは？
      </h1>

      <div className="selections-button flex flex-wrap text-lg">
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
        <button className="selection-button block">test</button>
      </div>

      <Link href="/">
        <button className="selection-button">戻る</button>
      </Link>
      {/* <Image
        className="gafamImage"
        src="/footer.png"
        width={380}
        height={150}
        alt="GAFAMロゴ画像"
      /> */}
    </div>
  );
}
