import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, HeaderComp } from "../../components";
import Footer from "../../components/Footer";
import JumbotronHome from "../Helpers/Jumbotrons/JumbotronHome";
import TeamIntro from "../Helpers/Team/TeamIntro";
import TasksHome from "../Helpers/WhatWeDo/TasksHome";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>NeXuS</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[70px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <HeaderComp pageName="home"/>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[95px] max-w-[1181px]">
              <JumbotronHome />
              <TeamIntro />
              <TasksHome />
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  color="red_400_01"
                  size="lg"
                  shape="circle"
                  className="w-[68px] ml-[124px] z-[1] border-white-A700 border-[9px] border-solid"
                >
                  <Img src="images/img_group_682.svg" />
                </Button>
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
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          I am very satisfied with the work on the Nexus team. good service, satisfying work results and
                          can also increase my business turnover. Thank you so much to the Nexus team.
                        </Text>
                        <div className="flex flex-row justify-start w-3/5 mb-[11px] ml-1.5 gap-[25px]">
                          <Img
                            src="images/img_rectangle_52.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[61%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              John Richard
                            </Heading>
                            <Text size="xs" as="p">
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          since branding with the oracle team i feel my business has a very fast and good development,
                          everything also always goes through a process of discussion that is really valid
                        </Text>
                        <div className="flex flex-row justify-start w-[63%] mb-[11px] ml-1.5 gap-6">
                          <Img
                            src="images/img_rectangle_52_49x49.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[63%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              Andrew Smith
                            </Heading>
                            <Text size="xs" as="p">
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this
                          team next time. I do not hesitate to cooperate because the results are very satisfying
                        </Text>
                        <div className="flex flex-row justify-start w-[54%] mb-[11px] ml-1.5 gap-[25px]">
                          <Img
                            src="images/img_rectangle_52_1.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[56%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              Steve John
                            </Heading>
                            <Text size="xs" as="p">
                              CEO rumahku
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
