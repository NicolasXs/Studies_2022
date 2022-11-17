import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/pokeball.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src={logo} width={30} height={30} alt="PokeNext" />
        <h1>PokeNext</h1>
      </div>
      <ul>
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
