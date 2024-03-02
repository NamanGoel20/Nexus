import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Input, Button, TextArea, Text, HeaderComp } from "../../components";
import JumbotronContact from "../Helpers/Jumbotrons/JumbotronContact";
import ContactForm from "../Helpers/Form/ContactForm";
import ContactInfo from "../Helpers/ContactInfo/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>NeXuS</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[54px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <HeaderComp pageName="contact"/>
        </div>
        <div className="flex flex-col items-end justify-start w-full gap-[108px] mx-auto max-w-[1311px]">
          <div className="flex flex-col items-center justify-start w-[91%] gap-[100px]">
            <JumbotronContact />
            <div className="flex flex-row justify-start items-center w-full gap-[41px]">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800">
            <div className="flex flex-row justify-between items-start w-[92%] mt-[19px]">
              <div className="flex flex-col items-start justify-start w-[70%] gap-1">
                <div className="flex flex-row justify-between items-start w-full">
                  <Img src="images/img_group_642_red_400.svg" alt="image_seven" className="h-[50px]" />
                  <div className="flex flex-row w-[47%] mt-[25px] gap-[123px]">
                    <div className="flex flex-col items-center justify-start w-[29%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Heading size="lg" as="h2" className="ml-px !text-white-A700 tracking-[4.00px]">
                          ABOUT
                        </Heading>
                        <div className="h-0.5 w-[45%] mt-2.5 bg-deep_orange-A100" />
                        <div className="flex flex-col items-start justify-start mt-[38px] gap-[29px]">
                          <Heading as="h3" className="!text-white-A700 tracking-[0.90px] !font-semibold">
                            About
                          </Heading>
                          <Heading as="h4" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold">
                            What we do
                          </Heading>
                          <Heading as="h5" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold">
                            Works
                          </Heading>
                          <Heading as="h6" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold">
                            Testimonial
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[38%] gap-[37px]">
                      <div className="flex flex-col items-start justify-start w-full gap-2.5">
                        <Heading size="lg" as="h5" className="!text-white-A700 tracking-[4.00px]">
                          FOLLOW US
                        </Heading>
                        <div className="h-0.5 w-[34%] bg-deep_orange-A100" />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[30px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold">
                          Dribbble
                        </Heading>
                        <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold">
                          Instagram
                        </Heading>
                        <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold">
                          Behance
                        </Heading>
                        <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold">
                          Pinterest
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img src="images/img_group_710.svg" alt="image_eight" className="h-[311px] mt-[120px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
