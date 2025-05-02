"use client";
import Form from "@/components/Form";
import Section from "@/components/Section";
import ImageCustom from "@/components/ImageCustom";

function DataCollection() {
  return (
    <Section id="form">
      <ImageCustom
        src="/images/suzuki_cars.webp"
        alt="5 Mobil Suzuki"
        height="h-40"
      />
      <Form />
    </Section>
  );
}

export default DataCollection;
