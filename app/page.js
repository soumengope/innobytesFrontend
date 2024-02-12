"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const redirectPage = setTimeout(()=>{
      window.location.href="http://localhost:3000/myUser";
    },1000)
  },[])
  return (
    <div className={styles.mainDiv}>

      <div className={styles.imgLogo}><Image src="/logo.svg" width={42.984} height={67.546} alt="" ></Image></div>
      
      <div className={styles.top_mainSection}>
        <div className={styles.head_desc}>
          <div className={styles.header}>Registration</div>
          <div className={styles.description}>Onboarding Design</div>
        </div>
        <div className={styles.top_imgdiv1}><Image src="/1.png" width={450.379} height={308.478}alt="" ></Image></div>
        <div className={styles.top_imgdiv2}><Image src="/3.png" width={87} height={308.478}alt=""></Image></div>
      </div>

      <div className={styles.bot_mainSection}>
        <div className={styles.bot_headndesc}>
          <div className={styles.bot_header}>Dribbble</div>
          <div className={styles.bot_description}>@Presh_legacy</div>
        </div>
        <div className={styles.bot_imgdiv1}><Image src="/41.png" width={450.379} height={250.478} alt=""></Image></div>
        <div className={styles.bot_imgdiv2}><Image src="/2.png" width={187.379} height={250.478} alt=""></Image></div>
      </div>

    </div>
  );
}
