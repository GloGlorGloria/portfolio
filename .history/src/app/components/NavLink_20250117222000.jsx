import styles from "./NavLink.module.css";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return(
    <Link 
        href={href} 
        className={`${styles.menu}`}>
        <a>{title}</a>
    </Link>
  );
};

console.log(NavLink);

export default NavLink;