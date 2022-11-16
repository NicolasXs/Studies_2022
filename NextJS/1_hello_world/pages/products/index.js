import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className={styles.container}>
        <h1>Página de Produtos</h1>
        <ul>
          <li>
            <Link href="/">Voltar</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
