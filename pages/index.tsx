import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import InfoCard from "../components/cards/Infocard";
import Name from "../components/framer-motion/Name";
import Title from "../components/framer-motion/Title";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-[#999999] relative flex-col items-center justify-center">
      <Head>
        <title>Stark Portfolio</title>
        <link rel="icon" href="/icon-s.png" />
      </Head>
      <main className="flex w-full h-full pb-12 items-center justify-center px-20 text-center flex-col  md:pb-4 lg:flex-row lg:space-x-96 ">
        <div>
          <Name name="Chad Stark" />
          <Title title="Fullstack Developer" />
        </div>
        <div className="flex flex-col space-y-10 my-4">
          <Link href="https://github.com/Stark-program">
            <InfoCard
              topic={"My Github"}
              about={"Click here to visit my github profile."}
            />
          </Link>
          <Link href="/projects">
            <InfoCard
              topic={"My Projects"}
              about={"Click here to visit some of my hosted projects."}
            />
          </Link>
          <Link href="/resume.pdf">
            <InfoCard
              topic={"My Resume"}
              about={"Click here for a copy of my resume."}
            />
          </Link>
        </div>
      </main>

      <footer className="flex flex-row w-full absolute bottom-0 items-center justify-center border-t">
        <p className="w-full text-center">
          Questions? Contact me at:{" "}
          <span className="font-bold underline ml-1 ">
            chadrenstark@gmail.com
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
