// 頑張りたい

import { useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";
import { Share } from "../components/Share";
import { Img } from "../components/img";

export default function MakeEffort() {
  //名言のリスト
  const makeEffortLists = [
    {
      name: "スティーブ\nジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
      img: "/images/Steve_Jobs.webp",
      feeling: "make",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
      img: "/images/Steve_Jobs.webp",
      feeling: "make",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "重要なことに集中する唯一の方法は「ノー」と言うことだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "make",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
      img: "/images/Steve_Jobs.webp",
      feeling: "make",
    },
    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
      img: "/images/thim.webp",
      feeling: "make",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
      img: "/images/thim.webp",
      feeling: "make",
    },
    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
      img: "/images/thim.webp",
      feeling: "make",
    },
    {
      name: "ラリー\nペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
      img: "/images/Larry_Page.jpg",
      feeling: "make",
    },
    {
      name: "ラリー\nペイジ",
      value: "アイデアに価値はない。それを実行できてはじめて価値になる",
      img: "/images/Larry_Page.jpg",
      feeling: "make",
    },
    {
      name: "ラリー\nペイジ",
      value: "大胆な挑戦の末での失敗ならば、問題ではない",
      img: "/images/Larry_Page.jpg",
      feeling: "make",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value:
        "アイデアを思いつくことは何か素晴らしいものを作ることの中で最も大事な部分ではありません。一番大事なのは実行することです。",
      img: "/images/Sergey.jpg",
      feeling: "make",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "厳しい時代こそ最高のものが生み出される。",
      img: "/images/Sergey.jpg",
      feeling: "make",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "人々は常に新しいものを求めます。",
      img: "/images/Sergey.jpg",
      feeling: "make",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "今の時代に成功する人は非常に洗練されていなければなりません。",
      img: "/images/Sergey.jpg",
      feeling: "make",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "成功はシンプルから生まれる。",
      img: "/images/Sergey.jpg",
      feeling: "make",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "私たちの世代の挑戦は新しい仕事を作り出すことだけでなく、新しい目的意識を作り出すことだ",
      img: "/images/Mark.jpg",
      feeling: "make",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
      img: "/images/Mark.jpg",
      feeling: "make",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "一番大事なのは、まずはやってみようということ。",
      img: "/images/Mark.jpg",
      feeling: "make",
    },
    {
      name: "ジェフ\nベゾス",
      value: "発明家になりたければ失敗を恐れるな。",
      img: "/images/Jeff.jpg",
      feeling: "make",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事をとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "make",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "毎日毎日「勝ちたい」という気持ちで出社しなければならない。切羽詰まったときにこそ、最高の能力を発揮できる",
      img: "/images/Bill.jpg",
      feeling: "make",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "一心不乱に働くこと、ベストを尽くすことが嫌だというなら、ここは君のいるべき職場ではない",
      img: "/images/Bill.jpg",
      feeling: "make",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事を自分のことを、この世の誰とも比べてはいけない。それは自分自身を侮辱する行為だとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "make",
    },
    {
      name: "ビル\nゲイツ",
      value: "問題は未来だ。だから私は、過去を振り返らない",
      img: "/images/Bill.jpg",
      feeling: "make",
    },
  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 24));

  const name = makeEffortLists[number].name;
  const content = makeEffortLists[number].value;
  const img = makeEffortLists[number].img;

  // このページでリロードするとエラーになる

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="flex h-2/6 text-center justify-center items-center">
        <div className="w-1/3 flex text-center justify-center items-center">
          <Img img={img} />
        </div>
        <div className="w-2/3 text-center tracking-wider flex justify-center items-center whitespace-pre-wrap sm:text-8xl">
          <Title text={name} />
        </div>
      </div>
      <div className="h-2/6 p-6 text-center leading-10 text-xl tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>『{content}』</p>
      </div>

      <Button text="戻る" href="/selection" />
      <Share />
    </div>
  );
}
