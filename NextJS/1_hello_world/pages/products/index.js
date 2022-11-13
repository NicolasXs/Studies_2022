import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Products() {
  return (
    <div className={styles.container}>
      <h1>Página de Produtos</h1>
      <ul>
        <li>
          <Link href="/">Voltar</Link>
        </li>
      </ul>
    </div>
  );
}
