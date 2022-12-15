import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

export default function Answer() {
  //名言のリスト
  const lists = [
    {
      name: "スティーブ・ジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
    },
    {
      name: "スティーブ・ジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
    },
    {
      name: "スティーブ・ジョブズ",
      value: "重要なことに集中する唯一の方法は「ノー」と言うことだ",
    },
    {
      name: "スティーブ・ジョブズ",
      value:
        "顧客はより幸せでよりよい人生を夢見ている。製品を売ろうとするのではなく、彼らの人生を豊かにするのだ",
    },
    {
      name: "スティーブ・ジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
    },
    {
      name: "ティム・クック",
      value:
        "盲目の人にとっても、私達のデバイスが使いやすいものになるように働いている時、私は投資利益率のことなんて全く考えていない",
    },
    {
      name: "ティム・クック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
    },
    {
      name: "ティム・クック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
    },
    {
      name: "ティム・クック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
    },
    {
      name: "ティム・クック",
      value:
        "あなたという人間は、あなたが作り上げたもので決まる",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "アイデアに価値はない。それを実行できてはじめて価値になる",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "大胆な挑戦の末での失敗ならば、問題ではない",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "イノベーションは小さなグループから起こる",
    },
    {
      name: "グーグル共同創業者ラリー・ペイジ",
      value:
        "夢を持つなら、とびきり野心的な方がいい。その方が前に進めるから",
    },


  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 16));
console.log(lists)
  const name = lists[number].name;
  const content = lists[number].value;
  //このページでリロードするとエラーになる

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="h-1/6 p-6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-8xl">
        <Title text={name} />
      </div>
      <div className="h-4/6 p-6 text-center leading-10 text-base tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>『{content}』</p>
      </div>

      <Link href="selection">
        <Button text="戻る" />
      </Link>
    </div>
  );
}
