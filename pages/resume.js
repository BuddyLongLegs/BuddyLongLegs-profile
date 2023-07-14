import Head from "next/head";
import styles from "../styles/Resume.module.css";
import styles1 from "../styles/Nav.module.css";
import styles2 from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import handleAnimation from "../lib/aniUseEffectHandler";

export default function Connect(props) {
  useEffect(() => {
    handleAnimation(props);
  }, [props]);

  return (
    <div>
      <Head>
        <title>Resume · BuddyLongLegs</title>
      </Head>
      <div className={[styles2.container, styles1.invisible, styles.cont].join(" ")}>
        <iframe src="/Resume_14_Jul_2023.pdf" className={styles.pdf}></iframe>
      </div>
    </div>
  );
}
