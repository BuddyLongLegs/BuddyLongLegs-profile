import Head from 'next/head'
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Connect.module.css";
import styles2 from "../styles/Nav.module.css";
import { useEffect, useState, useRef } from 'react'
import handleAnimation from "../lib/aniUseEffectHandler";
import { useRouter } from 'next/router'


export default function Connect(props){
	const router = useRouter();
	const refs = useRef(null);
	const ref = useRef(null);
	let [submitwidth, setSubmitWidth] = useState("15rem");
  let [width, setWidth] = useState("30rem");
	
	const submit = (e)=>{
		e.preventDefault();
    if(document.getElementById("submit_button").classList.contains(styles1.darken)) return false;
		document.getElementById("submit_button").classList.toggle(styles1.darken)
		let data = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			subject: document.getElementById("subject").value,
			message: document.getElementById("message").value
		}
		fetch("/api/mail", {
			method: "POST",
			body: JSON.stringify(data)
		})
		.then((response) => {
			document.getElementById("submit_button").classList.toggle(styles1.darken)
			document.getElementById("submit_text").style.display = "none";
			refs.current.play()
		})
    return false;
	}

    useEffect(()=>{

      if(typeof window !== undefined){
        if(window.innerWidth < 850 || window.innerHeight < 600){
          setSubmitWidth((w)=>{return `10rem`});
          setWidth((w)=>{return `0px`});
        }else if(window.innerWidth > 850){
          setWidth((w)=>{return `${window.innerWidth * 0.3}px`})
        }
      }

      import("@lottiefiles/lottie-player");
      handleAnimation(props);
	  document.getElementById("emoteSubmit").addEventListener("complete", ()=>{
		refs.current.seek(0);
		refs.current.pause();
		document.getElementById("submit_text").style.display = "block";
		setTimeout(()=>{
			router.push("/")
		}, 1000)
	  })
    }, [props, router])
    
    return(
      <div>
        <Head>
          <title>Connect · BuddyLongLegs</title>
        </Head>
        <div className={[styles.container, styles1.container, styles2.invisible].join(" ")}>
            <h3 className={[styles1.heading].join(" ")}>
              Drop a Hello
            </h3>
          <form className={[styles1.message_form].join(" ")} onSubmit={(e)=>{return submit(e); }}>
            <div className={[styles1.input_cont, styles1.input_cont_pair, styles1.margin_r].join(" ")}>
              <input className={[styles1.form_input, styles1.name].join(" ")} type="text" name="name" id="name" placeholder='Name' required autocomplete="off"/>
              <span className={styles1.input_border}></span>
            </div>
            <div className={[styles1.input_cont, styles1.input_cont_pair].join(" ")}>
              <input className={[styles1.form_input, styles1.email].join(" ")} type="email" name="email" id="email" placeholder='Email' required autocomplete="off"/>
              <span className={styles1.input_border}></span>
            </div>
            <div className={styles1.input_cont}>
              <input className={[styles1.form_input, styles1.subject].join(" ")} type="text" name="subject" id="subject" placeholder='Subject' required autocomplete="off"/>
              <span className={styles1.input_border}></span>
            </div>
            <div className={styles1.input_cont}>
              <textarea className={[styles1.form_input, styles1.message].join(" ")} name="message" id="message" cols="30" rows="10" placeholder='Message' required autocomplete="off"></textarea>
              <span className={styles1.input_border}></span>
            </div>
            <button className={[styles1.submit].join(" ")} type="submit" id="submit_button">
                <div className={[styles1.submit_emote].join(" ")}>
                <lottie-player
                // autoplay
                speed="1"
                ref={refs}
				        id="emoteSubmit"
                background="transparent"
                src="/button.json"
                style={{"width": submitwidth, "height": submitwidth}}
              ></lottie-player></div>
              <div className={[styles1.submit_text].join(" ")} id="submit_text">Submit</div>
            </button>
          </form>
        <div id="emote" className={[styles.emote, styles2.invisible].join(" ")}>
          <lottie-player
            autoplay
            loop
            speed="1"
            ref={ref}
            background="transparent"
            mode="bounceplay"
            src="/mail.json"
            style={{"width": width, "height": width}}
            ></lottie-player>
          </div>
        </div>
      </div>     
    )
}