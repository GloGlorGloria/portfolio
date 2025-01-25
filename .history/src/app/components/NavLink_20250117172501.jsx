import styles from "./NavLink.module.css";

const NavLink = ({ href, title }) => {
  return(
    <Link href={"#about"} className={`${styles.menu}`}>About</Link>
  )
}