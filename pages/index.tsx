import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import PostCard from "../components/PostCard/PostCard";
import HorizontalPostCard from "../components/HorizontalPostCard/PostCard";

import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.content__grid__desktop}>
            <div className={styles.content__grid__desktop__first}>
              <PostCard />
            </div>
            <div className={styles.content__grid__desktop__second}>
              <PostCard />
            </div>
            <div className={styles.content__grid__desktop__third}>
              <PostCard />
            </div>
            <div className={styles.content__grid__desktop__body}>
              <HorizontalPostCard />
              <HorizontalPostCard />
              <HorizontalPostCard />
              <HorizontalPostCard />
              <HorizontalPostCard />
            </div>
          </div>
          <div className={styles.content__grid__mobile}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
