import React from "react";
import { Heading, Img } from "../../../components";

const Moments = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[63px]">
            <Heading size="4xl" as="h1">
                Our Moments
            </Heading>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                    <Img
                        src="images/img_rectangle_29.png"
                        alt="image_one"
                        className="w-full object-cover rounded-[10px]"
                    />
                    <Img
                        src="images/img_rectangle_30.png"
                        alt="image_two"
                        className="w-full object-cover rounded-[10px]"
                    />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                    <Img
                        src="images/img_rectangle_31.png"
                        alt="image_three"
                        className="w-full object-cover rounded-[10px]"
                    />
                    <Img src="images/img_mask_group.png" alt="image_four" className="w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-[29px]">
                    <Img
                        src="images/img_kelly_sikkema_c.png"
                        alt="kellysikkemac"
                        className="w-full object-cover rounded-[10px]"
                    />
                    <Img
                        src="images/img_woman_sitting_o.png"
                        alt="womansittingo"
                        className="w-full object-cover rounded-[10px]"
                    />
                    <Img src="images/img_mask_group_206x374.png" alt="image_five" className="w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Moments;