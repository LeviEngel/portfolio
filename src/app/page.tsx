import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="./profile-picture.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className={styles.profileImage}
        />
      </main>
    </div>
  );
}
