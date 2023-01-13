// 少し休憩

import { useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";
import { Share } from "../components/Share";
import { Img } from "../components/img";

export default function Rest() {
  //名言のリスト
  const lists = [
    {
      name: "スティーブ\nジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
      img: "/images/Steve_Jobs.webp",
      feeling: "rest",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
      img: "/images/Steve_Jobs.webp",
      feeling: "rest",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "重要なことに集中する唯一の方法は「ノー」と言うことだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "rest",
    },
    {
      name: "スティーブ\nジョブズ",
      value:
        "顧客はより幸せでよりよい人生を夢見ている。製品を売ろうとするのではなく、彼らの人生を豊かにするのだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "rest",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
      img: "/images/Steve_Jobs.webp",
      feeling: "rest",
    },
    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
      img: "/images/thim.webp",
      feeling: "rest",
    },
    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
      img: "/images/thim.webp",
      feeling: "rest",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "成功はシンプルから生まれる。",
      img: "/images/Sergey.jpg",
      feeling: "rest",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "同じTシャツしか着ない",
      img: "/images/Mark.jpg",
      feeling: "rest",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
      img: "/images/Mark.jpg",
      feeling: "rest",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "変化というのは、身近な場所から始まる。世界的な変化だって、私たちのような小さな存在から始まる",
      img: "/images/Mark.jpg",
      feeling: "rest",
    },

    {
      name: "マーク\nザッカーバーグ",
      value: "一番大事なのは、まずはやってみようということ。",
      img: "/images/Mark.jpg",
      feeling: "rest",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事をとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "rest",
    },

    {
      name: "ビル\nゲイツ",
      value: "問題は未来だ。だから私は、過去を振り返らない",
      img: "/images/Bill.jpg",
      feeling: "rest",
    },
    {
      name: "ビル\nゲイツ",
      value: "人間にはものを考える時間が必要だ",
      img: "/images/Bill.jpg",
      feeling: "rest",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "変わることがなければ成長することもない。成長することがなければ真に生きていない",
      img: "/images/Bill.jpg",
      feeling: "rest",
    },
  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 16));

  const name = lists[number].name;
  const content = lists[number].value;
  const img = lists[number].img;

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
