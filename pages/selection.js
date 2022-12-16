import Link from "next/link";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

export default function selection() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <Title text="今の気持ちは？" />

      <div className="h-3/6 text-center text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <Link href="/answer">
          <button className="selection-button block">頑張る</button>
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
        <Button text="戻る" />
      </Link>
    </div>
  );
}
