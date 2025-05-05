import CardGallery from "@/components/cards/CardGallery";
import ImageCustom from "@/components/ImageCustom";
import Section from "@/components/Section";
import data from "@/data/promoItem.json";
import styles from "@/styles/promoItem.module.css";
import { useEffect, useRef } from "react";

function PromoItem() {
  const galleryScroll = useRef<null | HTMLDivElement>(null);

  function onClick(direction: string) {
      if (direction == "prev") galleryScroll.current!.scrollLeft -= 500;
      if (direction == "next") galleryScroll.current!.scrollLeft += 500;
  }

  useEffect(() => {
    if (galleryScroll.current) galleryScroll.current.scrollLeft = 0;
  }, []);

  return (
    <Section>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>{data.header}</h2>
        <div ref={galleryScroll} className={styles.gallery}>
          {data.items.map((car, id) => (
            <CardGallery
              key={id}
              name={car.name}
              src={car.src}
              price={car.price}
              discountedPrice={car.discountedPrice}
            />
          ))}
          <ImageCustom
            src="/images/arrow.svg"
            alt="arrow left"
            styles={`${styles.arrow} ${styles.arrowL}`}
            onClick={() => onClick("prev")}
          />
          <ImageCustom
            src="/images/arrow.svg"
            alt="arrow right"
            styles={`${styles.arrow} ${styles.arrowR}`}
            onClick={() => onClick("next")}
          />
        </div>
      </div>
    </Section>
  );
}

export default PromoItem;
