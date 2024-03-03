import React from "react";
import { Text, Img, Heading } from "../../../components";

const Testimonial = ({ textContent, imgSrc, headingName, pos, isActive }) => {
  return (
    <div
      className={`testimonial ${isActive ? "active" : ""}`}
      style={{ transition: "transform 0.5s ease", display: isActive ? "flex" : "none" }}
    >
      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px] " style={{ width: "100%" }}>
        <Text size="s" as="p" className="w-[99%] ml-1.5">
          {textContent}
        </Text>
        <div className="flex flex-row justify-start w-[63%] mb-[11px] ml-1.5 gap-6">
          <Img
            src={imgSrc}
            alt="image"
            className="w-[49px] object-cover rounded-[12px]"
          />
          <div className="flex flex-col items-start justify-start w-[63%] gap-1">
            <Heading size="lg" as="h5" className="!font-semibold">
              {headingName}
            </Heading>
            <Text size="xs" as="p">
              {pos}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
