import styles from "./NavLink.module.css";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return(
    <Link href={"#about"} className={`${styles.menu}`}>About</Link>
  )
}