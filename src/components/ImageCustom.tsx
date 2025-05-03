import Image from "next/image";
import styles from "@/styles/image.module.css";

interface Props {
  src: string;
  alt: string;
  size: string;
}

function ImageCustom({ src, alt, size="h-full w-full" }: Props) {
  return (
    <div className={`${styles.imageContainer} ${size}`}>
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
