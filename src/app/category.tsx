import React from "react";
import Image from "next/image";
import arrow from "../assets/arrow_forward.png";

export default function Category(props: any) {
  const { text, iconImage, height, width } = props;
  return (
    <div className="category">
      <div className="category-text IBM-400">{text}</div>
      <div>
        <Image
          src={iconImage}
          width={width}
          height={height}
          alt="arrow image"
        />
      </div>
    </div>
  );
}

Category.defaultProps = {
  iconImage: arrow,
  height: 16,
  width: 16,
  text: "Adventure",
};
