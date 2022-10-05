import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styles2 from "../styles/Nav.module.css";
import { useEffect, useState, useRef } from 'react'
import handleAnimation from '../lib/aniUseEffectHandler';
import { useRouter } from 'next/router'


export default function Home(props) {
  const router = useRouter();
  const ref = useRef(null);
  let [width, setWidth] = useState("30rem");
  

  useEffect(()=>{
  let fadein = [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 1}
  ];
  let transtime = {
    duration: 800,
    iterations: 1
  };
    import("@lottiefiles/lottie-player");
    if(typeof window !== undefined){
      if(window.innerWidth < 850 || window.innerHeight < 600){
        setWidth((w)=>{return `0px`});
        document.getElementById("about").style.transitionDelay="1.5s";
      }
      else if(window.innerWidth > 850){
        setWidth((w)=>{return `${window.innerWidth * 0.3}px`})
      }
    }
    handleAnimation(props);
    let emote = document.getElementById("emote");
    const l1=(e)=>{
      ref.current.load('/resume.json');
      emote.animate(fadein, transtime);
    };
    const l2=(e)=>{
      ref.current.load('/mail.json');
      emote.animate(fadein, transtime);
    };
    const l3=(e)=>{
      ref.current.load('/ani1.json');
      emote.animate(fadein, transtime);
    };
    document.getElementById("resume").addEventListener("mouseenter", l1)
    document.getElementById("resume").addEventListener("mouseleave", l3)
    document.getElementById("connect").addEventListener("mouseenter", l2)
    document.getElementById("connect").addEventListener("mouseleave", l3)
    // return ()=>{
    //   document.getElementById("resume").removeEventListener("mouseenter", l1);
    //   document.getElementById("resume").removeEventListener("mouseleave", l3);
    //   document.getElementById("connect").removeEventListener("mouseenter", l2);
    //   document.getElementById("connect").removeEventListener("mouseleave", l3);
    // }
  }, 
  [props])

  return (
    <>
      <Head>
        <title>BuddyLongLegs</title>
      </Head>
      <div className={styles.container}>
          <div id="intro" className={[styles.intro, styles2.invisible].join(" ")}>
            <p>Under Graduate, &thinsp;</p>
            <div className={[styles.roller].join(" ")}>
              <a href="https://iiita.ac.in/"><span>IIIT Allahabad</span></a>
            </div>
          </div>
          <div id="about" className={[styles.about, styles2.invisible].join(" ")}>
              <p>
                I&apos;m a<span style={{color: "#FF8c32"}}> Web Developer!</span>
              </p>
              <div className={styles.about_buttons}>
                <button onClick={()=>{router.push('/resume');}} id='resume' className={styles.about_resume}>Resume</button>
                <button onClick={()=>{router.push('/connect');}} id='connect' className={styles.about_connect}>Connect</button>
              </div>
          </div>
          <div id="emote" className={[styles.emote, styles2.invisible].join(" ")}>
          <lottie-player
            autoplay
            loop
            speed="1"
            ref={ref}
            background="transparent"
            mode="bounceplay"
            src="/ani1.json"
            style={{"width": width, "height": width}}
          ></lottie-player>
          </div>
      </div>
      </>
  )
}
