import Image from "next/image";
import styles from "@/styles/image.module.css";

interface Props {
  src: string;
  alt: string;
  height: string;
}

function ImageCustom({ src, alt, height }: Props) {
  return (
    <div className={`${styles.imageContainer} ${height}`}>
      <Image
        className={styles.images}
        src={src}
        alt={alt}
        fill
        loading="lazy"
      />
    </div>
  );
}

export default ImageCustom;
