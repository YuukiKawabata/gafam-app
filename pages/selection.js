import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Share } from "../components/Share";

export default function selection() {
  // const selectionLists = [
  //   { button: "頑張りたい" },
  //   { button: "励まして" },
  //   { button: "行くぞ！！" },
  //   { button: "疲れたよ。。" },
  //   { button: "少し休憩" },
  //   { button: "なんでも" },
  // ];

  return (
    <div className="h-screen w-screen justify-center items-center">
      <Title text="今の気持ちは？" />

      <div className="h-2/6 text-base text-center tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <Link href="/makeEffort">
          <button className="selection-button block">頑張りたい</button>
        </Link>
        <Link href="/cheerUp">
          <button className="selection-button block">励まして</button>
        </Link>
        <Link href="/let'sGo">
          <button className="selection-button block">行くぞ！！</button>
        </Link>
        <Link href="/tired">
          <button className="selection-button block">疲れたよ。</button>
        </Link>
        <Link href="/rest">
          <button className="selection-button block">少し休憩</button>
        </Link>
        {/* <Link href="/everything">
          <button className="selection-button block">なんでも</button>
        </Link> */}
      </div>

      <Button text="戻る" href="/" />
      <Share />
    </div>
  );
}
