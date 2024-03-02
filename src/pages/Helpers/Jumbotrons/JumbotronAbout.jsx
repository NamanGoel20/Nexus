import React from "react";
import { Heading, Text, Img } from "../../../components";

const JumbotronAbout = () => {
    return (
        <div className="flex flex-row justify-start w-full p-[53px] bg-yellow-100 rounded-[90px]">
            <div className="flex flex-row justify-start items-start w-[88%] mt-[19px] ml-[60px]">
                <div className="flex flex-col items-start justify-start w-[10%] gap-[60px]">
                    <Img src="images/img_ellipse_11.png" alt="circleimage" className="h-[89px] w-[89px] rounded-[50%]" />
                    <div className="h-3.5 w-3.5 ml-[23px] bg-pink-400 rounded-[50%]" />
                </div>
                <div className="flex flex-col items-end justify-start w-[91%] gap-[61px]">
                    <div className="h-3.5 w-3.5 mr-[134px] bg-deep_orange-A100 rounded-[50%]" />
                    <div className="flex flex-row justify-end w-full">
                        <div className="flex flex-row justify-end items-start w-full">
                        <div className="flex flex-col items-center justify-start w-[91%] gap-[15px] z-[1]">
                            <Heading size="5xl" as="h1" className="w-[66%] text-center leading-[60px]">
                                <span className="text-black-900">Get to know more </span>
                                <span className="text-red-400_01">about us</span>
                            </Heading>
                            <Text as="p" className="text-center !leading-10">
                                We are an agency engaged in the creative industry and business, we are ready to help you to
                                improve your business performance together with our great team
                            </Text>
                        </div>
                        <Img
                            src="images/img_ellipse_13.png"
                            alt="circleimage_one"
                            className="h-[89px] w-[89px] ml-[-11px] rounded-[50%]"
                        />
                    </div>
                </div>
                <Img
                    src="images/img_ellipse_12.png"
                    alt="circleimage_two"
                    className="h-[89px] w-[89px] mr-[89px] rounded-[50%]"
                />
            </div>
        </div>
        </div>
    );
}

export default JumbotronAbout;