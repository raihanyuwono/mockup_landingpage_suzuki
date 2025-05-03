"use client";

import FabGoTop from "@/components/FabGoTop";
import Benefit from "@/contents/Benefit";
import DataCollection from "@/contents/DataCollection";
import PromoItem from "@/contents/PromoItem";
import Promotion from "@/contents/Promotion";

export default function Home() {
  return (
    <>
      <Promotion />
      <Benefit />
      <PromoItem />
      <DataCollection />
      <FabGoTop />
    </>
  );
}
