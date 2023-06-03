import React from "react";
import Image from "next/image";
import arrow from "../assets/arrow_forward.png";
import item1 from "../assets/item1.png";

export default function Highlight(props: any) {
  const {
    imageUrl,
    imageWidth,
    imageHeight,
    btnIcon,
    btnIconWidth,
    btnIconHeight,
    headerText,
    bodyText,
    containerClass,
  } = props;
  return (
    <div className={`highlight ${containerClass}`}>
      <Image
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        alt="highlight image"
        style={{
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div className="highlight-desc">
        <div className="header">{headerText}</div>
        <div className="item-body IBM-400">{bodyText}</div>
        <div className="btn-area">
          <div className="arrow-btn centerHV">
            <Image
              src={btnIcon}
              width={btnIconWidth}
              height={btnIconHeight}
              alt="arrow image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Highlight.defaultProps = {
  imageUrl: item1,
  imageWidth: 368,
  imageHeight: 170,
  headerText: "Surfing",
  bodyText: "Best Hawaiian islands for surfing.",
  btnIcon: arrow,
  btnIconWidth: 16,
  btnIconHeight: 16,
  containerClass: "",
};
