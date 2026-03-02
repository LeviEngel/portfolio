"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Skills</Link>
          </li>
          <li>
            <Link href="">Work</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Interests</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
