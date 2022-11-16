import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import city from "../public/images/city.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keyworlds" content="Roupas, Calçados, Boné" />
        <meta name="description" content="Encontre a melhor roupa para você" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image src={city} alt="Cidade a noite" />
      </div>
    </>
  );
}
