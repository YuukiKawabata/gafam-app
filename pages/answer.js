import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";

export default function Answer() {
  //名言のリスト
  const lists = [
    {
      name: "スティーブ\nジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "重要なことに集中する唯一の方法は「ノー」と言うことだ",
    },
    {
      name: "スティーブ\nジョブズ",
      value:
        "顧客はより幸せでよりよい人生を夢見ている。製品を売ろうとするのではなく、彼らの人生を豊かにするのだ",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
    },
    {
      name: "ティム\nクック",
      value:
        "盲目の人にとっても、私達のデバイスが使いやすいものになるように働いている時、私は投資利益率のことなんて全く考えていない",
    },
    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
    },
    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value: "アイデアに価値はない。それを実行できてはじめて価値になる",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value: "大胆な挑戦の末での失敗ならば、問題ではない",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value: "イノベーションは小さなグループから起こる",
    },
    {
      name: "グーグル共同創業者\nラリー\nペイジ",
      value: "夢を持つなら、とびきり野心的な方がいい。その方が前に進めるから",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value: "あまりにも多くのルールを採用すると革新は阻害されてしまう。",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value:
        "アイデアを思いつくことは何か素晴らしいものを作ることの中で最も大事な部分ではありません。一番大事なのは実行することです。",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value: "厳しい時代こそ最高のものが生み出される。",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value: "人々は常に新しいものを求めます。",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value: "今の時代に成功する人は非常に洗練されていなければなりません。",
    },
    {
      name: "グーグル共同創業者\nセルゲイ\nミハイロヴィッチ\nブリン",
      value: "成功はシンプルから生まれる。",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "同じTシャツしか着ない",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "世界の富豪でありながら、給料は年間1ドル",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "私たちの世代の挑戦は新しい仕事を作り出すことだけでなく、新しい目的意識を作り出すことだ",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "変化というのは、身近な場所から始まる。世界的な変化だって、私たちのような小さな存在から始まる",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "完璧であることより、まず終わらせることが重要だ",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "最大のリスクは、リスクを取らないことだ",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "一番大事なのは、まずはやってみようということ。",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "「お金がないならアイデアを出せ」",
    },
  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 31));
  console.log(lists);

  const name = lists[number].name;
  const content = lists[number].value;
  // このページでリロードするとエラーになる

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="h-2/6 p-6 text-center tracking-wider flex justify-center items-center whitespace-pre-wrap sm:text-8xl">
        <Title text={name} />
      </div>
      <div className="h-3/6 p-6 text-center leading-10 text-xl tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>『{content}』</p>
      </div>

      <Link href="selection">
        <Button text="戻る" />
      </Link>
    </div>
  );
}
