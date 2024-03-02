import React from "react";
import { Img, Heading, Text } from "../../../components";

const JumbotronContact = () => {
    return (
        <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start w-full p-[51px] bg-blue-50 rounded-[90px]">
                <div className="h-[381px] w-[98%] mt-[72px] mb-[91px] relative">
                  <Img
                    src="images/img_group_767.svg"
                    alt="image_one"
                    className="justify-center h-[381px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex flex-col items-center justify-center w-full h-full gap-[76px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Heading size="5xl" as="h1" className="text-center">
                      <span className="text-black-900">Get in </span>
                      <span className="text-red-400_01">touch</span>
                    </Heading>
                    <Text as="p" className="text-center !leading-10">
                      Stay connected with us, we will help you with your various needs. we will provide the best service
                      in technical and consulting matters. You can provide your needs or something you ask in the form
                      below
                    </Text>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default JumbotronContact;