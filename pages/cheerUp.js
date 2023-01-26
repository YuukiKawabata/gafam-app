// 励まして

import { useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";
import { Share } from "../components/Share";
import { Img } from "../components/img";

export default function CheerUp() {
  //名言のリスト
  const Lists = [
    {
      name: "スティーブ\nジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
      img: "/images/Steve_Jobs.webp",
      feeling: "cheer",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
      img: "/images/Steve_Jobs.webp",
      feeling: "cheer",
    },
    {
      name: "スティーブ\nジョブズ",
      value:
        "顧客はより幸せでよりよい人生を夢見ている。製品を売ろうとするのではなく、彼らの人生を豊かにするのだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "cheer",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
      img: "/images/Steve_Jobs.webp",
      feeling: "cheer",
    },

    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
      img: "/images/tim.webp",
      feeling: "cheer",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
      img: "/images/tim.webp",
      feeling: "cheer",
    },

    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
      img: "/images/tim.webp",
      feeling: "cheer",
    },
    {
      name: "ラリー\nペイジ",
      value:
        "「そんなバカなことはLarry_Pageできない」と誰もが思うことならば、競争相手はいないも同然だ",
      img: "/images/.jpg",
      feeling: "cheer",
    },
    {
      name: "ラリー\nペイジ",
      value: "アイデアに価値はない。それを実行できてはじめて価値になる",
      img: "/images/Larry_Page.jpg",
      feeling: "cheer",
    },
    {
      name: "ラリー\nペイジ",
      value: "大胆な挑戦の末での失敗ならば、問題ではない",
      img: "/images/Larry_Page.jpg",
      feeling: "cheer",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "厳しい時代こそ最高のものが生み出される。",
      img: "/images/Brin.jpg",
      feeling: "cheer",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "人々は常に新しいものを求めます。",
      img: "/images/Brin.jpg",
      feeling: "cheer",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "今の時代に成功する人は非常に洗練されていなければなりません。",
      img: "/images/Brin.jpg",
      feeling: "cheer",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "成功はシンプルから生まれる。",
      img: "/images/Brin.jpg",
      feeling: "cheer",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "私たちの世代の挑戦は新しい仕事を作り出すことだけでなく、新しい目的意識を作り出すことだ",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "変化というのは、身近な場所から始まる。世界的な変化だって、私たちのような小さな存在から始まる",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "完璧であることより、まず終わらせることが重要だ",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },

    {
      name: "マーク\nザッカーバーグ",
      value: "一番大事なのは、まずはやってみようということ。",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "お金がないならアイデアを出せ",
      img: "/images/Mark.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事をとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "毎日毎日「勝ちたい」という気持ちで出社しなければならない。切羽詰まったときにこそ、最高の能力を発揮できる",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },

    {
      name: "ビル\nゲイツ",
      value: "成功を祝うのはいいが、もっと大切なのは失敗から学ぶことだ",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "反対があるのは健全なこと。本当に力のあるアイデアか試されるわけだから",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事を自分のことを、この世の誰とも比べてはいけない。それは自分自身を侮辱する行為だとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value: "問題は未来だ。だから私は、過去を振り返らない",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value: "人間にはものを考える時間が必要だ",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "変わることがなければ成長することもない。成長することがなければ真に生きていない",
      img: "/images/Bill.jpg",
      feeling: "cheer",
    },
  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 28));

  const name = Lists[number].name;
  const content = Lists[number].value;
  const img = Lists[number].img;

  // このページでリロードするとエラーになる

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="flex h-2/6 text-center justify-center items-center">
        <div className="flex text-center justify-center items-center">
          <Img img={img} />
        </div>
        <div className="leading-8 text-center tracking-wider flex justify-center items-center whitespace-pre-wrap sm:text-8xl">
          <Title text={name} />
        </div>
      </div>{" "}
      <div className="h-2/6 p-6 text-center leading-10 text-xl tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>『{content}』</p>
      </div>
      <Button text="戻る" href="/selection" />
      <Share />
    </div>
  );
}
