import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Página de About</h1>
      <ul>
        <li>
          <Link href="/">Voltar</Link>
        </li>
      </ul>
    </div>
  );
}
