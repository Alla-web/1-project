import Image from "next/image";

import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h1>First project</h1>
        <div className={css.photoContainer}>
          <Image
            src="/homepage-photo.jpg"
            width={600}
            height={630}
            quality={100}
            alt="Reading dog"
          />
          <Image
            src="/homepage-photo-1.jpg"
            width={600}
            height={630}
            quality={100}
            alt="girafe"
          />
        </div>
      </main>
    </div>
  );
}
