// 落ち着きたい

import { useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import React from "react";
import { Share } from "../components/Share";
import { Img } from "../components/img";

export default function Everything() {
  //名言のリスト
  const lists = [
    {
      name: "スティーブ\nジョブズ",
      value:
        "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか？",
      img: "/images/Steve_Jobs.webp",
      feeling: "everything",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "一つのことを、一生やり続けられると確信する日がくる",
      img: "/images/Steve_Jobs.webp",
      feeling: "everything",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "重要なことに集中する唯一の方法は「ノー」と言うことだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "everything",
    },
    {
      name: "スティーブ\nジョブズ",
      value:
        "顧客はより幸せでよりよい人生を夢見ている。製品を売ろうとするのではなく、彼らの人生を豊かにするのだ",
      img: "/images/Steve_Jobs.webp",
      feeling: "everything",
    },
    {
      name: "スティーブ\nジョブズ",
      value: "ハングリーであれ。愚か者であれ。",
      img: "/images/Steve_Jobs.webp",
      feeling: "everything",
    },
    {
      name: "ティム\nクック",
      value:
        "盲目の人にとっても、私達のデバイスが使いやすいものになるように働いている時、私は投資利益率のことなんて全く考えていない",
      img: "/images/tim.webp",
      feeling: "everything",
    },
    {
      name: "ティム\nクック",
      value:
        "彼から受けた最も偉大な教訓は、人生の楽しみは、冒険の中にあるということ",
      img: "/images/tim.webp",
      feeling: "everything",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
      img: "/images/tim.webp",
      feeling: "everything",
    },
    {
      name: "ティム\nクック",
      value:
        "ジョブズのようであれという目標を、私は決して持っていない。なぜなら、私は私でしかあり得ないから",
      img: "/images/tim.webp",
      feeling: "everything",
    },
    {
      name: "ティム\nクック",
      value: "あなたという人間は、あなたが作り上げたもので決まる",
      img: "/images/tim.webp",
      feeling: "everything",
    },
    {
      name: "ラリー\nペイジ",
      value:
        "「そんなバカなことはできない」と誰もが思うことならば、競争相手はいないも同然だ",
      img: "/images/Larry_Page.jpg",
      feeling: "everything",
    },
    {
      name: "ラリー\nペイジ",
      value: "アイデアに価値はない。それを実行できてはじめて価値になる",
      img: "/images/Larry_Page.jpg",
      feeling: "everything",
    },
    {
      name: "ラリー\nペイジ",
      value: "大胆な挑戦の末での失敗ならば、問題ではない",
      img: "/images/Larry_Page.jpg",
      feeling: "everything",
    },
    {
      name: "ラリー\nペイジ",
      value: "イノベーションは小さなグループから起こる",
      img: "/images/Larry_Page.jpg",
      feeling: "everything",
    },
    {
      name: "ラリー\nペイジ",
      value: "夢を持つなら、とびきり野心的な方がいい。その方が前に進めるから",
      img: "/images/Larry_Page.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "あまりにも多くのルールを採用すると革新は阻害されてしまう。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value:
        "アイデアを思いつくことは何か素晴らしいものを作ることの中で最も大事な部分ではありません。一番大事なのは実行することです。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "厳しい時代こそ最高のものが生み出される。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "人々は常に新しいものを求めます。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "今の時代に成功する人は非常に洗練されていなければなりません。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "セルゲイ\nミハイロヴィッチ\nブリン",
      value: "成功はシンプルから生まれる。",
      img: "/images/Brin.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "同じTシャツしか着ない",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "世界の富豪でありながら、給料は年間1ドル",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "私たちの世代の挑戦は新しい仕事を作り出すことだけでなく、新しい目的意識を作り出すことだ",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "偉大な成功は 、失敗する自由から生まれる",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value:
        "変化というのは、身近な場所から始まる。世界的な変化だって、私たちのような小さな存在から始まる",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "完璧であることより、まず終わらせることが重要だ",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "最大のリスクは、リスクを取らないことだ",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "一番大事なのは、まずはやってみようということ。",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "マーク\nザッカーバーグ",
      value: "お金がないならアイデアを出せ",
      img: "/images/Mark.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "変わらないものを軸に戦略を立てよ。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "顧客に執着せよ",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "我々は長期間にわたって誤解されることを厭わない。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value:
        "会社には2種類ある。高く売るために努力する会社と、安く売るために努力する会社だ。我々は後者になる。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "顧客のニーズから逆算せよ。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value:
        "アマゾンの企業文化は「調和」と「情熱」だが、いざどちらかを選ぶとなれば、我々は「情熱」をとる。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "発明家になりたければ失敗を恐れるな。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value:
        "自分のもっている時間を100%とすると、かつては30%をサービスの構築に、残りの70％をプレゼンに充てたが、時代は変わった。これからは逆だ。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ジェフ\nベゾス",
      value: "誰もがコールセンターで働けるようにならなければいけない。",
      img: "/images/Jeff.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事をとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "毎日毎日「勝ちたい」という気持ちで出社しなければならない。切羽詰まったときにこそ、最高の能力を発揮できる",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "一心不乱に働くこと、ベストを尽くすことが嫌だというなら、ここは君のいるべき職場ではない",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value: "成功を祝うのはいいが、もっと大切なのは失敗から学ぶことだ",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "反対があるのは健全なこと。本当に力のあるアイデアか試されるわけだから",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は起業家という言葉をいつも拒否してきた。「会社を始めよう、何の会社にしようか」では決して成功しない",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "私は物事を自分のことを、この世の誰とも比べてはいけない。それは自分自身を侮辱する行為だとことん突き詰めるのが好きなんだ。そうすれば、たいてい良い結果が出るから",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value: "問題は未来だ。だから私は、過去を振り返らない",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value: "人間にはものを考える時間が必要だ",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
    {
      name: "ビル\nゲイツ",
      value:
        "変わることがなければ成長することもない。成長することがなければ真に生きていない",
      img: "/images/Bill.jpg",
      feeling: "everything",
    },
  ];

  //ランダムな数字を出して、数字を元に名言を出す
  const [number, setNumber] = useState(Math.floor(Math.random() * 49));
  console.log(lists);

  const name = lists[number].name;
  const content = lists[number].value;
  const img = lists[number].img;

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
      <div className="card overflow-auto h-2/6 p-6 text-center leading-10 text-xl tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>{content}</p>
      </div>
      <Button text="戻る" href="/selection" />
      <Share />
    </div>
  );
}
