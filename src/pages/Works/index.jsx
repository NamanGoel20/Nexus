import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, HeaderComp } from "../../components";
import Footer from "../../components/Footer";
import JumbotronWorks from "../Helpers/Jumbotrons/JumbotronWorks";

export default function WorksPage() {
  return (
    <>
      <Helmet>
        <title>NeXuS</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <HeaderComp pageName="works"/>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[88%] mt-[54px] mr-14 gap-[111px]">
            <JumbotronWorks />
            <div className="flex flex-col items-start justify-start w-full gap-11">
              <div className="flex flex-row justify-between items-start w-[59%]">
                <Heading size="4xl" as="h2">
                  Latest Project
                </Heading>
                <Text as="p" className="mt-2.5">
                  this is the last variety of projects we have worked on
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[105px]">
                <div className="flex flex-row justify-start w-full mx-auto max-w-[1180px]">
                  <div className="h-[527px] w-full relative">
                    <Img
                      src="images/img_group_21.png"
                      alt="image_three"
                      className="h-[482px] w-[67%] bottom-0 right-0 m-auto object-cover absolute"
                    />
                    <div className="h-[496px] w-full top-0 right-0 left-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[328px] left-0 bottom-0 right-0 top-0 p-11 m-auto bg-orange-A200 absolute rounded-[30px]">
                        <Heading size="3xl" as="h3" className="ml-14 !text-white-A700 !font-nunito !font-extrabold">
                          Foodie.
                        </Heading>
                        <div className="h-0.5 w-[7%] mb-7 ml-14 bg-white-A700" />
                      </div>
                      <Heading
                        size="3xl"
                        as="h4"
                        className="w-[26%] bottom-[29%] left-[9%] m-auto !text-white-A700 absolute"
                      >
                        Launching website for Apps
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="h-[580px] w-full relative">
                  <Img
                    src="images/img_group_790.png"
                    alt="image_four"
                    className="h-[456px] w-[57%] right-0 top-[7%] m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[95%] h-full left-0 bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-center w-full pl-[63px] pr-14 py-[63px] bg-indigo-800 rounded-[30px]">
                      <Heading size="3xl" as="h5" className="ml-[38px] !text-transparent bg-gradient bg-clip-text">
                        Floops
                      </Heading>
                      <Heading size="3xl" as="h6" className="w-[29%] mt-[190px] ml-[38px] !text-white-A700">
                        Landing page for Website Service
                      </Heading>
                      <div className="h-0.5 w-[7%] mt-[68px] mb-[17px] ml-[38px] bg-white-A700" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mx-auto max-w-[1181px]">
                  <div className="h-[580px] w-full bg-red-A200 relative rounded-[30px]">
                    <div className="flex flex-row justify-between items-center w-[92%] h-full right-0 bottom-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-start w-[28%]">
                        <div className="flex flex-row justify-start items-center gap-4">
                          <Img src="images/img_group_51_1.png" alt="image_five" className="w-[31%] object-cover" />
                          <Img src="images/img_insight.svg" alt="insight_one" className="h-8" />
                        </div>
                        <Heading size="3xl" as="h2" className="mt-[173px] !text-white-A700">
                          Website for creative agency
                        </Heading>
                        <div className="h-0.5 w-[24%] mt-[68px] bg-white-A700" />
                      </div>
                      <Img
                        src="images/img_web_1920_2_1.png"
                        alt="web19202one_one"
                        className="w-[35%] object-cover rounded-[30px]"
                      />
                    </div>
                    <Img
                      src="images/img_web_1920_2_1_580x1181.png"
                      alt="web19202one"
                      className="justify-center h-[580px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[110px] pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
