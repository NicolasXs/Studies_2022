import Image from "next/image";
import styles from "../styles/About.module.css";
import charizard from "../public/images/charizard.png";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        obcaecati similique quam quibusdam ut ad quas, ex fugit enim placeat
        odio, dicta labore sit nostrum blanditiis nam? Nemo, similique quos?
      </p>
      <Image src={charizard} width={300} height={300} alt="Charizard" />
    </div>
  );
}
