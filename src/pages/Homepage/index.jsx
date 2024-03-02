import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, HeaderComp } from "../../components";
import Footer from "../../components/Footer";
import JumbotronHome from "../Helpers/Jumbotrons/JumbotronHome";
import TeamIntro from "../Helpers/TeamIntro";

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
              <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                <Heading size="4xl" as="h1">
                  What we do
                </Heading>
                <div className="flex flex-row justify-center w-full px-14 py-28 bg-red-50 rounded-[90px]">
                  <div className="flex flex-row w-[85%] mb-1.5 gap-[102px] mx-[27px]">
                    <div className="flex flex-col items-start justify-start w-[23%] gap-9 my-[35px] cursor-pointer hover:shadow-xs">
                      <Button color="red_300" className="w-[46px]">
                        <Img src="images/img_group_670.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          UIUX Design
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          We can make your website or application design better with this service
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[31%] gap-[34px] p-[25px] bg-white-A700 shadow-xs cursor-pointer rounded-[30px] hover:shadow-xs">
                      <Button color="cyan_400" className="w-[46px] mt-3">
                        <Img src="images/img_support_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start mb-2 gap-[15px]">
                        <Heading size="xl" as="h4">
                          Website Dev
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          Make your business more leverage by having an optimal website and we are ready to help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[27%] gap-9 my-[35px] cursor-pointer hover:shadow-xs">
                      <Button color="lime_800" className="w-[46px]">
                        <Img src="images/img_idea_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          Branding & Product
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          we can also help you in the affairs of product branding so that your products can be more
                          riveting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
