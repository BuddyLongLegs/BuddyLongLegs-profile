import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isHome, setIsHome] = useState(false);
    useEffect(() => {
        router.events.on("routeChangeStart", (url) => {
            if (url !== router.pathname) {
                setIsHome((h) => {
                    return true;
                });
                router.pathname = url;
                document
                    .getElementById("title")
                    .classList.remove(styles.title_final1);
                document
                    .getElementById("title")
                    .classList.remove(styles.title_final);
                document
                    .getElementById("connbar")
                    .classList.remove(styles.connbar_show);
                document
                    .getElementById("conncir")
                    .classList.remove(styles.conncir_show);
            }
        });
    }, [router, isHome]);
    return (
        <div>
            <Head>
                <meta name="theme-color" content="#06113c"></meta>
                <meta
                    name="description"
                    content="Official portfolio site of BuddyLongLegs (Anurag Jain). Anurag is a student at IIIT Allahabad and Web Development enthusiast."
                ></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta charset="UTF-8"></meta>

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@AnuragJ46055219" />
                <meta name="twitter:creator" content="@AnuragJ46055219" />
                <meta property="og:url" content="http://buddylonglegs.live" />
                <meta property="og:title" content="BuddyLongLegs" />
                <meta
                    property="og:description"
                    content="Official portfolio site of BuddyLongLegs (Anurag Jain). Anurag is a student at IIIT Allahabad and Web Development enthusiast."
                />
                <meta
                    property="og:image"
                    content="http://buddylonglegs.live/bll_header.png"
                />
            </Head>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
            />

            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-CTERQSE497', {
                    page_path: window.location.pathname,
                    });
                    `,
                }}
            />
            <div className="bg">
                <div className="circle"></div>
                <div className="circle circle1"></div>
                <div className="circle circle3">
                    <div className="circle circle2"></div>
                </div>
            </div>
            <div className="default">
                <div className={[styles.title_cont]}>
                    <div
                        id="title"
                        className={[styles.title].join(" ")}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <div id="texts" className={[styles.texts].join(" ")}>
                            <div className={[styles.texts_top].join(" ")}>
                                <span>B</span>
                                <span>u</span>
                                <span>d</span>
                                <span>d</span>
                                <span>y</span>
                                <span>L</span>
                                <span>o</span>
                                <span>n</span>
                                <span>g</span>
                                <span>L</span>
                                <span>e</span>
                                <span>g</span>
                                <span>s</span>
                            </div>
                            <div>
                                <span>A</span>
                                <span>n</span>
                                <span>u</span>
                                <span>r</span>
                                <span>a</span>
                                <span>g</span>
                                <span>&thinsp;</span>
                                <span>J</span>
                                <span>a</span>
                                <span>i</span>
                                <span>n</span>
                                <span>&thinsp;</span>
                                <span>&thinsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Component
                    routeChange={isHome}
                    setRouteChange={setIsHome}
                    key={router.asPath}
                    {...pageProps}
                />
                <div id="connbar" className={[styles.connbar_cont].join(" ")}>
                    <div className={[styles.conns].join(" ")}>
                        <a href="https://github.com/BuddyLongLegs">
                            <div
                                className={[styles.conn, styles.conn1].join(
                                    " "
                                )}
                            >
                                <div className={[styles.conn_text].join(" ")}>
                                    BuddyLongLegs
                                </div>
                                <svg
                                    className={[styles.conn_icon].join(" ")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2rem"
                                    height="2rem"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/anurag-jain-4ba46b220">
                            <div
                                className={[styles.conn, styles.conn2].join(
                                    " "
                                )}
                            >
                                <div className={[styles.conn_text].join(" ")}>
                                    Anurag_Jain
                                </div>
                                <svg
                                    className={[styles.conn_icon].join(" ")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2rem"
                                    height="2rem"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                </svg>
                            </div>
                        </a>
                        <div
                            onClick={() => {
                                router.push("/connect");
                            }}
                            className={[styles.conn, styles.conn3].join(" ")}
                        >
                            <div className={[styles.conn_text].join(" ")}>
                                Connect
                            </div>
                            <svg
                                className={[styles.conn_icon].join(" ")}
                                width="2rem"
                                height="2rem"
                                viewBox="0 1 112 113"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M56.26 0.5C25.46 0.5 0.5 25.74 0.5 56.88C0.5 88.02 25.5 113.26 56.26 113.26C87.02 113.26 112 88 112 56.88C112 25.76 87.06 0.5 56.26 0.5ZM41.5792 97.5024C44.7331 96.4781 47.5777 94.6751 49.85 92.26L64.35 77.6C60.4207 78.2791 56.3775 77.72 52.78 76L43.29 85.62C41.3085 87.4759 38.6804 88.4843 35.966 88.4301C33.2517 88.3759 30.6659 87.2635 28.76 85.33C26.8402 83.3835 25.7409 80.7743 25.6888 78.0409C25.6367 75.3074 26.6358 72.6583 28.48 70.64L44.84 54.13C45.8346 53.1157 47.0269 52.3164 48.3429 51.7816C49.6589 51.2467 51.0707 50.9877 52.4909 51.0205C53.9111 51.0533 55.3094 51.3772 56.5993 51.9723C57.8892 52.5674 59.0433 53.4209 59.99 54.48C61.2581 55.894 62.1278 57.6195 62.51 59.48L69.69 52.22C68.2524 49.4721 66.1878 47.1013 63.6635 45.2997C61.1391 43.4981 58.226 42.3163 55.16 41.85C52.1078 41.3813 48.9879 41.6487 46.06 42.63C43.1187 43.6031 40.4494 45.2581 38.27 47.46L21.91 64.05C19.0199 66.8288 17.0249 70.4068 16.1805 74.3262C15.336 78.2455 15.6806 82.3277 17.17 86.05C18.3981 89.1302 20.383 91.851 22.9414 93.9608C25.4997 96.0706 28.5487 97.5011 31.8064 98.1201C35.0641 98.7392 38.4254 98.5267 41.5792 97.5024ZM74.9 66.93L91.25 50.4C93.1799 48.5623 94.7205 46.3552 95.78 43.91C96.8444 41.4617 97.412 38.8264 97.4498 36.1571C97.4875 33.4877 96.9947 30.8374 96 28.36C94.7754 25.274 92.7911 22.5473 90.2312 20.4331C87.6714 18.3188 84.6189 16.8854 81.3571 16.266C78.0953 15.6465 74.7299 15.8611 71.5731 16.8897C68.4164 17.9184 65.5707 19.7278 63.3 22.15L48.81 36.8C52.7147 36.1013 56.7401 36.6324 60.33 38.32L69.83 28.71C71.8098 26.8547 74.4363 25.8466 77.149 25.9008C79.8617 25.955 82.4458 27.0672 84.35 29C86.2754 30.9491 87.379 33.563 87.4329 36.3021C87.4869 39.0413 86.4871 41.6966 84.64 43.72L68.34 60.24C67.0098 61.5919 65.3356 62.5547 63.4981 63.0244C61.6606 63.4942 59.7297 63.453 57.9139 62.9054C56.0981 62.3578 54.4665 61.3245 53.1951 59.9172C51.9237 58.5098 51.061 56.7819 50.7 54.92L43.51 62.19C44.9492 64.9315 47.0027 67.3032 49.51 69.12C53.3106 71.8355 57.955 73.1067 62.6087 72.7053C67.2624 72.3039 71.6205 70.2562 74.9 66.93Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div id="conncir" className={styles.conncir_cont}>
                    <div id="menu" className={styles.menu}>
                        <a
                            className={[
                                styles.menu_button,
                                styles.icon_plus,
                            ].join(" ")}
                            href="#menu"
                        ></a>
                        <a
                            className={[
                                styles.menu_button,
                                styles.icon_plus,
                            ].join(" ")}
                            href="#"
                        ></a>
                        <div className={[styles.menu_item].join(" ")}>
                            <a href="https://github.com/BuddyLongLegs">
                                <svg
                                    className={[styles.menu_item_icon].join(
                                        " "
                                    )}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3.5rem"
                                    height="3.5rem"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        <div className={[styles.menu_item].join(" ")}>
                            <a href="https://www.linkedin.com/in/anurag-jain-4ba46b220">
                                <svg
                                    className={[styles.menu_item_icon].join(
                                        " "
                                    )}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3.5rem"
                                    height="3.5rem"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                </svg>
                            </a>
                        </div>
                        <div
                            className={[styles.menu_item].join(" ")}
                            onClick={() => {
                                router.push("/connect");
                            }}
                        >
                            <a href="#0">
                                <svg
                                    className={[styles.menu_item_icon].join(
                                        " "
                                    )}
                                    width="3.5rem"
                                    height="3.5rem"
                                    viewBox="0 1 112 113"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M56.26 0.5C25.46 0.5 0.5 25.74 0.5 56.88C0.5 88.02 25.5 113.26 56.26 113.26C87.02 113.26 112 88 112 56.88C112 25.76 87.06 0.5 56.26 0.5ZM41.5792 97.5024C44.7331 96.4781 47.5777 94.6751 49.85 92.26L64.35 77.6C60.4207 78.2791 56.3775 77.72 52.78 76L43.29 85.62C41.3085 87.4759 38.6804 88.4843 35.966 88.4301C33.2517 88.3759 30.6659 87.2635 28.76 85.33C26.8402 83.3835 25.7409 80.7743 25.6888 78.0409C25.6367 75.3074 26.6358 72.6583 28.48 70.64L44.84 54.13C45.8346 53.1157 47.0269 52.3164 48.3429 51.7816C49.6589 51.2467 51.0707 50.9877 52.4909 51.0205C53.9111 51.0533 55.3094 51.3772 56.5993 51.9723C57.8892 52.5674 59.0433 53.4209 59.99 54.48C61.2581 55.894 62.1278 57.6195 62.51 59.48L69.69 52.22C68.2524 49.4721 66.1878 47.1013 63.6635 45.2997C61.1391 43.4981 58.226 42.3163 55.16 41.85C52.1078 41.3813 48.9879 41.6487 46.06 42.63C43.1187 43.6031 40.4494 45.2581 38.27 47.46L21.91 64.05C19.0199 66.8288 17.0249 70.4068 16.1805 74.3262C15.336 78.2455 15.6806 82.3277 17.17 86.05C18.3981 89.1302 20.383 91.851 22.9414 93.9608C25.4997 96.0706 28.5487 97.5011 31.8064 98.1201C35.0641 98.7392 38.4254 98.5267 41.5792 97.5024ZM74.9 66.93L91.25 50.4C93.1799 48.5623 94.7205 46.3552 95.78 43.91C96.8444 41.4617 97.412 38.8264 97.4498 36.1571C97.4875 33.4877 96.9947 30.8374 96 28.36C94.7754 25.274 92.7911 22.5473 90.2312 20.4331C87.6714 18.3188 84.6189 16.8854 81.3571 16.266C78.0953 15.6465 74.7299 15.8611 71.5731 16.8897C68.4164 17.9184 65.5707 19.7278 63.3 22.15L48.81 36.8C52.7147 36.1013 56.7401 36.6324 60.33 38.32L69.83 28.71C71.8098 26.8547 74.4363 25.8466 77.149 25.9008C79.8617 25.955 82.4458 27.0672 84.35 29C86.2754 30.9491 87.379 33.563 87.4329 36.3021C87.4869 39.0413 86.4871 41.6966 84.64 43.72L68.34 60.24C67.0098 61.5919 65.3356 62.5547 63.4981 63.0244C61.6606 63.4942 59.7297 63.453 57.9139 62.9054C56.0981 62.3578 54.4665 61.3245 53.1951 59.9172C51.9237 58.5098 51.061 56.7819 50.7 54.92L43.51 62.19C44.9492 64.9315 47.0027 67.3032 49.51 69.12C53.3106 71.8355 57.955 73.1067 62.6087 72.7053C67.2624 72.3039 71.6205 70.2562 74.9 66.93Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
