import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolasxs/" target="blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/NicolasXs" target="blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
