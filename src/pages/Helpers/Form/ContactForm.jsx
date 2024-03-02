import React from "react";
import { Input, Button, TextArea , Img} from "../../../components";

const ContactForm = () => {
    return (
        <div className="flex flex-row justify-start w-[66%]">
            <div className="flex flex-col items-start justify-start w-full pl-[72px] pr-14 gap-[23px] py-[72px] bg-white-A700 shadow-2xl rounded-[20px]">
                <div className="flex flex-col items-center justify-start w-[89%] ml-[39px] gap-[23px]">
                    <Input size="xs" name="message" placeholder="Send Message" className="w-full" />
                    <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                            <div className="flex flex-row justify-start w-full gap-[30px]">
                                <Input
                                    color="gray_100"
                                    variant="fill"
                                    shape="round"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-[48%]"
                                />
                                <Input
                                    color="gray_100"
                                    variant="fill"
                                    shape="round"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-[48%]"
                                />
                            </div>
                            <TextArea
                            name="your_message"
                            placeholder="Your Message"
                            className="w-full text-gray-400 font-bold"
                            />
                        </div>
                    </div>
                </div>
                <Button
                    color="green_600"
                    size="sm"
                    rightIcon={<Img src="images/img_group.svg" alt="Group" />}
                    className="mb-[30px] ml-[39px] gap-[13px] min-w-[182px] rounded-[25px]"
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

export default ContactForm;