"use client";

import FabGoTop from "@/src/components/FabGoTop";
import DataCollection from "@/src/contents/DataCollection";
import Promotion from "@/src/contents/Promotion";

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
