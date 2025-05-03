import Section from "@/components/Section";
import ImageCustom from "@/components/ImageCustom";
import styles from "@/styles/promotion.module.css";
import data from "@/data/promotion.json";

function Promotion() {
  return (
    <Section id="promotion">
      <div className={styles.container}>
        <ImageCustom src="/images/logo.svg" alt="logo" styles={styles.logo}/>
        <h1 className={styles.header}>{data.header}</h1>
        <div className={styles.subheader}>{data.subheader}</div>
        <div className={styles.invitation}>{data.invitation}</div>
        <a className={styles.button} href="#form">
          {data.cta}
        </a>
      </div>
      <ImageCustom
        src="/images/suzuki_swift.webp"
        alt="suzuki swift"
        styles={styles.image}
      />
    </Section>
  );
}

export default Promotion;
