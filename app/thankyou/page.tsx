"use client";

import Section from "@/components/Section";
import styles from "@/styles/thankyou.module.css";
import data from "@/data/thankyou.json";
import ImageCustom from "@/components/ImageCustom";

function ThankYou() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.containerGreeting}>
          <h1 className={styles.header}>{data.greeting}</h1>
          <div className={styles.info}>{data.info}</div>
        </div>
        <ImageCustom
          src="/images/suzuki_cars.webp"
          alt="suzuki thank you"
          height="h-40"
        />
      </div>
    </Section>
  );
}

export default ThankYou;
