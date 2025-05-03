import styles from "@/styles/promoItem.module.css";
import ImageCustom from "@/components/ImageCustom";
import {NumToStr} from "@/utils/converter";

interface Props {
  name?: string;
  src?: string;
  price?: number;
  discountedPrice?: number;
}

function CardGallery({ name="", src="", price=0, discountedPrice=0 }: Props) {
  return <div className={styles.cardContainer}>
    <ImageCustom src={src} alt={name} styles={styles.cardImage}/>
    <div className={styles.cardName}>{name}</div>
    <div className={styles.cardPrice}>{NumToStr(price)}</div>
    <div className={styles.cardDiscountedPrice}>{NumToStr(discountedPrice)}</div>
  </div>;
}

export default CardGallery;
