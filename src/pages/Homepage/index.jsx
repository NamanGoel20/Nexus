import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, HeaderComp } from "../../components";
import Footer from "../../components/Footer";
import JumbotronHome from "../Helpers/Jumbotrons/JumbotronHome";
import TeamIntro from "../Helpers/Team/TeamIntro";
import TasksHome from "../Helpers/WhatWeDo/TasksHome";
import TestimonialList from "../Helpers/Testimonials/TestimonialList";

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
                <TestimonialList />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
