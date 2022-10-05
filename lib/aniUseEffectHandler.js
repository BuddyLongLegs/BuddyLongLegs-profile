import styles2 from "../styles/Nav.module.css";
export default function handleAnimation(props){
    setTimeout(()=>{
        document.getElementById("title").classList.add(styles2.title_final);
        document.getElementById("connbar").classList.add(styles2.connbar_show);
        document.getElementById("conncir").classList.add(styles2.conncir_show);
        let invi = document.getElementsByClassName(styles2.invisible);
        while(invi.length>0){
            invi[0].classList.remove(styles2.invisible);
            invi = document.getElementsByClassName(styles2.invisible);
        }
        setTimeout(()=>{
            props.setRouteChange((h)=>{return false;})
            document.getElementById("title").classList.add(styles2.title_final1);
        }, 1000)
        }, props.routeChange ? 1800 : 1000);
}