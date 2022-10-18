import React from "react";
import Link from "next/link";
import Image from "next/image";
import Default from "./404.jpg";

import styles from "./PostCard.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.postcard}>
        <div className={styles.postcard__image__wrapper}>
          <Image
            className={styles.postcard__image}
            src={Default.src}
            layout="intrinsic"
            width={1920}
            height={1080}
          />
        </div>
        <article className={styles.postcard__text}>
          <h1 className={styles.postcard__text__title}>Post Title</h1>
          <p className={styles.postcard__text__description}>Post Description</p>
        </article>
      </div>
    </div>
  );
}
