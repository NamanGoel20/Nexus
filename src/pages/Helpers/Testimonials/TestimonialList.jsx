import React from "react";
import { Img, Heading } from "../../../components";
import Testimonial from "./Testimonial";

const TestimonialList = () => {
    return (
        <div className="h-[525px] w-full mt-[-34px] relative">
            <Img
                src="images/img_bg.png"
                alt="bg_one"
                className="justify-center h-[525px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-center justify-center w-max h-max gap-[61px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-row justify-between items-start w-full">
                    <Heading size="4xl" as="h1">
                        What our clients are saying
                    </Heading>
                    <div className="flex flex-row justify-start w-[13%] mt-0.5 gap-[9px]">
                        <div className="flex flex-row justify-start w-[48%]">
                            <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                                <Img src="images/img_frame_660.svg" alt="image_two" className="h-4 mx-[7px]" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-start w-[48%]">
                            <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                                <Img src="images/img_frame_661.svg" alt="image_three" className="h-4 mx-[7px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-[30px]">
                    <Testimonial 
                        textContent="I am very satisfied with the work on the Nexus team. good service, satisfying work results and
                          can also increase my business turnover. Thank you so much to the Nexus team." 
                        imgSrc="images/img_rectangle_52.png" 
                        headingName="John Richard" 
                        pos="Businessman" 
                    />
                    <Testimonial 
                        textContent="since branding with the oracle team i feel my business has a very fast and good development,
                        everything also always goes through a process of discussion that is really valid" 
                        imgSrc="images/img_rectangle_52_49x49.png" 
                        headingName="Andrew Smith" 
                        pos="Founder Ulala" 
                    />
                    <Testimonial 
                        textContent="I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this
                        team next time. I do not hesitate to cooperate because the results are very satisfying" 
                        imgSrc="images/img_rectangle_52_1.png" 
                        headingName="Steve John" 
                        pos="CEO rumahku" 
                    />
                </div>
            </div>
        </div>
    );
}

export default TestimonialList;