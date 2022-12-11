import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

export default function Answer() {
  
  //名言のリスト
  const lists = 
    [
      {
        name: "スティーブジョブズ",
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
      }
  ];

  //ランダムな数字を出して、数字を元に名言を出す
 const [number, setNumber] = useState(Math.floor(Math.random() * 4));
  
  const name = lists[number].name;
  const content = lists[number].value;
  //このページでリロードするとエラーになる

  return (
    <div className="h-screen w-screen justify-center items-center">
        <div className="h-1/6 m-6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-8xl">
      <Title text={name} />
      </div>
      <div className="h-4/6 m-6 text-center leading-10 text-base tracking-widest flex flex-wrap justify-center items-center sm:text-4xl">
        <p>{content}</p>
      </div>

      <Link href="selection">
        <Button text="戻る"/>
      </Link>
    </div>
  );
}


