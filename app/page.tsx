"use client";

import FabGoTop from "@/components/FabGoTop";
import Benefit from "@/contents/Benefit";
import DataCollection from "@/contents/DataCollection";
import Promotion from "@/contents/Promotion";

export default function Home() {
  return (
    <>
      <Promotion />
      <Benefit />
      <section>Section 3</section>
      <DataCollection />
      <FabGoTop />
    </>
  );
}
