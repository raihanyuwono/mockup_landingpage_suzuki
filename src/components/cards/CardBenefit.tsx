"use client";
import styles from "@/styles/benefit.module.css";
import ImageCustom from "../ImageCustom";

interface Props {
  content?: string;
  src?: string;
}

function CardBenefit({ content = "", src = "" }: Props) {
  return (
    <div className={styles.cardContainer}>
      <ImageCustom src={src} alt={content} styles={styles.cardImage} />
      <div className={styles.cardContent}>{content}</div>
    </div>
  );
}

export default CardBenefit;
