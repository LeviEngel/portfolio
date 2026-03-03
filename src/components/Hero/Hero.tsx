import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
          <h1 className={styles.title}>Hey 👋 I'm<br />Levi Engel</h1>
          <Image
            src="./profile-picture.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className={styles.alternatingImage}
          />
        </div>
  );
}