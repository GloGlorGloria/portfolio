import styles from "./NavLink.module.css";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return(
    <Link 
        href={href} 
        className={`${styles.menu}`}>
        {title}
    </Link>
  )
};

export default NavLink;