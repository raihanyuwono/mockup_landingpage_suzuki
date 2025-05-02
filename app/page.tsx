"use client";

import FabGoTop from "@/components/FabGoTop";
import DataCollection from "@/contents/DataCollection";
import Promotion from "@/contents/Promotion";

export default function Home() {
  return (
    <>
      <Promotion />
      <section>Section 2</section>
      <section>Section 3</section>
      <DataCollection />
      <FabGoTop />
    </>
  );
}
