// 疲れたよ。。

import { useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";
import { Share } from "../components/Share";
import { Img } from "../components/img";

export default function Tired() {
  //名言のリスト
  const lists = [
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
      img: "/images/Steve_Jobs.webp",
      feeling: "tired",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
      img: "/images/Steve_Jobs.webp",
      feeling: "tired",
    },

    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
      img: "/images/thim.webp",
      feeling: "tired",
    },

    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
      img: "/images/thim.webp",
      feeling: "tired",
    },

    {
      name: "ラリー\nペイジ",
      value: "アイデアに価値はない。それを実行できてはじめて価値になる",
      img: "/images/Larry_Page.jpg",
      feeling: "tired",
    },
    {
      name: "ラリー\nペイジ",
      value: "大胆な挑戦の末での失敗ならば、問題ではない",
      img: "/images/Larry_Page.jpg",
      feeling: "tired",
    },

    {
      name: "ラリー\nペイジ",
      value: "夢を持つなら、とびきり野心的な方がいい。その方が前に進めるから",
      img: "/images/Larry_Page.jpg",
      feeling: "tired",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "厳しい時代こそ最高のものが生み出される。",
      img: "/images/Sergey.jpg",
      feeling: "tired",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "同じTシャツしか着ない",
      img: "/images/Mark.jpg",
      feeling: "tired",
    },

    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
      img: "/images/Mark.jpg",
      feeling: "tired",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "変化というのは、身近な場所から始まる。世界的な変化だって、私たちのような小さな存在から始まる",
      img: "/images/Mark.jpg",
      feeling: "tired",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "完璧であることより、まず終わらせることが重要だ",
      img: "/images/Mark.jpg",
      feeling: "tired",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "最大のリスクは、リスクを取らないことだ",
      img: "/images/Mark.jpg",
      feeling: "tired",
    },

    {
      name: "ビル\nゲイツ",
      value:
        "私は物事をとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },

    {
      name: "ビル\nゲイツ",
      value:
        "一心不乱に働くこと、ベストを尽くすことが嫌だというなら、ここは君のいるべき職場ではない",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
    {
      name: "ビル\nゲイツ",
      value: "成功を祝うのはいいが、もっと大切なのは失敗から学ぶことだ",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "反対があるのは健全なこと。本当に力のあるアイデアか試されるわけだから",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },

    {
      name: "ビル\nゲイツ",
      value:
        "私は物事を自分のことを、この世の誰とも比べてはいけない。それは自分自身を侮辱する行為だとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
    {
      name: "ビル\nゲイツ",
      value: "問題は未来だ。だから私は、過去を振り返らない",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
    {
      name: "ビル\nゲイツ",
      value: "人間にはものを考える時間が必要だ",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "変わることがなければ成長することもない。成長することがなければ真に生きていない",
      img: "/images/Bill.jpg",
      feeling: "tired",
    },
  ];
  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 21));
  const name = lists[number].name;
  const content = lists[number].value;
  const img = lists[number].img;

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
