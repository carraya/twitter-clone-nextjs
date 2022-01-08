import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import styles from "../styles/Home.module.css";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen max-w-[1500px] flex w-full mx-auto">
        <Sidebar />
        <Feed />
        <Widgets />

        {/* Modal */}
      </main>
    </div>
  );
}
