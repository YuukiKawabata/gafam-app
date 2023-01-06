import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/Button";
import { Inside } from "../components/Inside";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <Head>
        <title>ビッグ・テック名言</title>
        <meta name="description" content="心に響く名言で前に進もう" />
      </Head>

      <Title text="ビッグ・テックを愛する人へ" />

      <Inside />

      <Link href="/selection">
        <Button text="始める" />
      </Link>
    </div>
  );
}
