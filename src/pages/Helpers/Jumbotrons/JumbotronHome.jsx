import React from "react";
import { Text, Heading, Img, Button } from "../../../components";
import { useNavigate } from "react-router-dom";

const JumbotronHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact");
    }
    return (
        <div className="h-[646px] w-full relative">
            <div className="flex flex-col items-start justify-center w-full h-full pl-[71px] pr-14 gap-[39px] left-0 bottom-0 right-0 top-0 py-[71px] m-auto bg-cyan-50 absolute rounded-[35px]">
              <Text as="p" className="w-[42%] mt-[245px] ml-[3px] !text-black-900_60 !leading-[35px]">
                Maximize your business with a variety of services and services from us
              </Text>
                <div className="flex flex-row justify-start mb-[83px] gap-6 z-10">
                    <Button size="md" className="font-bold min-w-[201px] rounded-[5px]" onClick={() => handleClick()}>
                      Contact Us
                    </Button>
                </div>
            </div>
            <div className="flex flex-row justify-center items-start w-[94%] h-full right-0 bottom-0 top-0 m-auto absolute">
                <Heading size="6xl" as="h1" className="w-[55%] mt-[45px] z-[1]">
                    <span className="text-black-900">Maximize your business with </span>
                    <span className="text-red-400_01">us</span>
                </Heading>
                <Img src="images/img_group_665.png" alt="image_one" className="w-1/2 ml-[-44px] object-cover" />
            </div>
        </div>
    );
}

export default JumbotronHome;