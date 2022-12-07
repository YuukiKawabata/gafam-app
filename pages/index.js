import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <Head>
        <title>名言GAFAM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https: //fonts.googleapis.com/css2? family=ユウジ+シュク& display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="h-1/6 text-4xl text-center tracking-wider flex justify-center items-center sm:text-6xl">
        <h1 className="">
          ビッグ・テックを
          <br />
          愛する人へ捧ぐ
        </h1>
      </div>

      <div className="h-4/6 text-center leading-10 text-lg tracking-widest flex flex-wrap justify-center items-center sm:text-2xl">
        <p className="p-5">興奮する名言を心に刻む。</p>
        <p className="p-5">そして、 自分を奮い立たせよ。</p>
        <p className="p-5">何か行動したい時、</p>
        <p className="p-5">出来ない時、困った時、</p>
        <p className="p-5">貴方の気持ちが前向きになりますように。</p>
      </div>

      <Link href="/selection">
        <div className="h-1/6">
          <button className="button block sm:text-2xl">今すぐ始める</button>
        </div>
      </Link>

      {/* <Image
        className="gafamImage"
        src="/footer.png"
        width={380}
        height={150}
        alt="GAFAMロゴ画像"
      /> */}
    </div>
  );
}
