import React from "react";
import { Img, Heading, Text } from "../../../components";

const JumbotronWorks = () => {
    return (
        <div className="flex flex-row justify-center w-full p-1 mx-auto bg-green-A100 max-w-[1180px] rounded-[90px]">
            <div className="flex flex-col items-start justify-start w-[97%] mt-[55px] mx-[22px]">
                <div className="flex flex-row justify-between items-start w-4/5">
                    <Img
                        src="images/img_rectangle_57.svg"
                        alt="image_one"
                        className="h-[114px] w-[114px] rounded-[10px]"
                    />
                  <div className="h-3.5 w-3.5 mt-3 bg-deep_orange-A100 rounded-[50%]" />
                </div>
                <div className="flex flex-row justify-between items-start w-3/4 mt-[25px] ml-[109px]">
                    <div className="h-3.5 w-3.5 mt-[49px] bg-light_blue-400 rounded-[50%]" />
                    <div className="flex flex-col items-end justify-start w-[93%] gap-[75px]">
                        <Heading size="5xl" as="h1" className="mr-[232px] text-center">
                            <span className="text-black-900">What we </span>
                            <span className="text-red-400_01">do</span>
                            <span className="text-black-900"></span>
                        </Heading>
                        <Text as="p" className="text-center !leading-10">
                            We have completed many projects from various companies in the world, we have made many of our
                            clients feel happy and satisfied with the results we have provided
                        </Text>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[98%] mt-1.5 ml-[26px]">
                    <Img src="images/img_group_776.svg" alt="image_two" className="h-[114px] w-[114px] mt-[31px]" />
                    <div className="flex flex-row justify-between items-start w-[22%]">
                        <Img
                            src="images/img_polygon_1.svg"
                            alt="polygonone_one"
                            className="h-[196px] w-[196px] mt-[7px] rounded-[15px]"
                        />
                        <div className="h-3.5 w-3.5 bg-deep_purple-800 rounded-[50%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JumbotronWorks;