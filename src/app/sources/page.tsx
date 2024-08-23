import BordersCode from "@/components/source/BordersCode";
import Regulation from "@/components/source/Regulation";
import ResidenceAct from "@/components/source/ResidenceAct";
import SourceHero from "@/components/source/SourceHero";
import VisaCode from "@/components/source/VisaCode";
import VisaHandbook from "@/components/source/VisaHandbook";
import React from "react";

const page = () => {
  return (
    <>
      <SourceHero />
      <ResidenceAct />
      <BordersCode />
      <Regulation />
      <VisaCode />
      <VisaHandbook />
    </>
  );
};

export default page;
