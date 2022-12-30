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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#fcf9f9"></meta>
      </Head>

      <Title text="ビッグ・テックを愛する人へ" />

      <Inside />

      <Link href="/selection">
        <Button text="始める" />
      </Link>
    </div>
  );
}
