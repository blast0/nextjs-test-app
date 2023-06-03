import React from "react";
import Image from "next/image";
import wA from "../assets/wA.png";
import wl from "../assets/wl.png";
import wo from "../assets/wo.png";
import wh from "../assets/wh.png";
import wa from "../assets/wa.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo-white">
        <Image src={wA} width={23} height={33} alt="highlight image" />
        <Image src={wl} width={17} height={32} alt="highlight image" />
        <Image src={wo} width={17} height={21} alt="highlight image" />
        <Image src={wh} width={22} height={35} alt="highlight image" />
        <Image src={wa} width={23} height={21} alt="highlight image" />
      </div>
    </div>
  );
}
