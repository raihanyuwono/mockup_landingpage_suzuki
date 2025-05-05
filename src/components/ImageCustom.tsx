import Image from "next/image";
import style from "@/styles/image.module.css";

interface Props {
  src: string;
  alt: string;
  styles: string;
  onClick?: () => void;
}

function ImageCustom({ src, alt, styles="h-full w-full", onClick }: Props) {
  return (
    <div className={`${style.imageContainer} ${styles}`} onClick={onClick}>
      <Image
        className={style.images}
        src={src}
        alt={alt}
        fill
        loading="lazy"
      />
    </div>
  );
}

export default ImageCustom;
