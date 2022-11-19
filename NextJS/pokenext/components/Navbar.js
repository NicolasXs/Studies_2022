import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/pokeball.png";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <Image src={logo} width={30} height={30} alt="PokeNext" />
        <h1>PokeNext</h1>
      </Link>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
