import Section from "@/components/Section";
import CardBenefit from "@/components/cards/CardBenefit";
import styles from "@/styles/benefit.module.css";
import data from "@/data/benefit.json";

function Benefit() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>{data.header}</h2>
        <div className={styles.container}>
          {data.benefits.map((benefit, id) => (
            <CardBenefit key={id} src={benefit.src} content={benefit.content} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefit;
