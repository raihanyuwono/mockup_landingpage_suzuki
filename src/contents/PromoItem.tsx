import CardGallery from "@/components/cards/CardGallery";
import Section from "@/components/Section";
import data from "@/data/promoItem.json";
import styles from "@/styles/promoItem.module.css";

function PromoItem() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>{data.header}</h2>
        <div className={styles.gallery}>
          {data.items.map((car, id) => (
            <CardGallery
              key={id}
              name={car.name}
              src={car.src}
              price={car.price}
              discountedPrice={car.discountedPrice}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PromoItem;
