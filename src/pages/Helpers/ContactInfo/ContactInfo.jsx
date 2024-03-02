import React from "react";
import { Input, Img, Heading } from "../../../components";

const ContactInfo = () => {
    return(
        <div className="flex flex-col items-center justify-center w-[32%] mb-3 gap-[30px] p-12 bg-white-A700 shadow-2xl rounded-[20px]">
            <div className="flex flex-col items-start justify-start w-[97%] mt-6 gap-[33px]">
                <Input size="sm" name="contact" placeholder="Contact Information" className="w-full" />
                <div className="flex flex-col items-start justify-start w-[92%] ml-1 gap-7">
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                        <Img src="images/img_frame_666.svg" alt="image_two" className="h-6 w-6 mb-px" />
                        <Heading size="s" as="h2" className="!text-gray-400_01">
                            hello@mail.com
                        </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                        <Img src="images/img_frame_665.svg" alt="image_three" className="h-6 w-6" />
                        <a href="www.abc.com" target="_blank" rel="noreferrer">
                            <Heading size="s" as="h3" className="!text-gray-400_01">
                                www.abc.com
                            </Heading>
                        </a>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-[25px]">
                        <Img src="images/img_frame_664.svg" alt="image_four" className="h-6 w-6 mt-[3px]" />
                        <Heading size="s" as="h4" className="w-4/5 !text-gray-400_01">
                            Sudirman street, holgan, melbourne
                        </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[25px]">
                        <Img src="images/img_frame_663.svg" alt="image_five" className="h-6 w-6" />
                        <Heading size="s" as="h5" className="!text-gray-400_01">
                            1234 - 5678
                        </Heading>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end justify-start w-full mb-[25px] gap-[41px]">
                <div className="flex flex-col items-start justify-start w-[98%] mr-2 gap-6">
                    <Heading size="lg" as="h6" className="!text-gray-600">
                        Social Media
                    </Heading>
                    <div className="h-px w-full bg-gray-200" />
                </div>
                <Img src="images/img_group_623.png" alt="image_six" className="w-[89%] object-cover" />
            </div>
        </div>
    );
}

export default ContactInfo;