import React from "react";
import Image from "next/image";
import guide from "../assets/guide.png";

export default function Guide() {
  return (
    <div className="guide">
      <div className="guide-details">
        <div className="guide-name">Hadwin Malone</div>
        <div className="guide-desc IBM-400">Guide since 2012</div>
        <div className="contact-btn">
          <div className="guide-contact-btn centerHV">Contact</div>
        </div>
      </div>

      <div className="guide-image">
        <Image src={guide} width="100%" height="100%" alt="highlight image" />
      </div>
    </div>
  );
}
