"use client";
import Form from "@/components/Form";
import Section from "@/components/Section";
import ImageCustom from "@/components/ImageCustom";
import styles from "@/styles/form.module.css";

function DataCollection() {
  return (
    <Section id="form">
      <ImageCustom
        src="/images/suzuki_cars.webp"
        alt="5 Mobil Suzuki"
        styles={styles.image}
      />
      <Form />
    </Section>
  );
}

export default DataCollection;
