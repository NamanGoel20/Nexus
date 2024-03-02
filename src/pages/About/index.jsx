import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, HeaderComp } from "../../components";
import Footer from "../../components/Footer";
import TeamMember from "../Helpers/Team/TeamMember";
import Moments from "../Helpers/OurMoment/Moments";
import JumbotronAbout from "../Helpers/Jumbotrons/JumbotronAbout";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>NeXuS</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <HeaderComp pageName="about"/>
          <div className="flex flex-col items-center justify-start w-full gap-[98px] max-w-[1180px]">
            <JumbotronAbout />
            <div className="justify-center w-full gap-[30px] grid-cols-3 grid min-h-[auto]">
              <TeamMember memName="Sarah Jae" memPos="Branding Specialist" memPic="images/img_rectangle_16.png"/>
              <TeamMember memName="John Doe" memPos="Product Designer" memPic="images/img_rectangle_15.png"/>
              <TeamMember memName="Samantha" memPos="SEO Specialist" memPic="images/img_rectangle_17.png"/>
              <TeamMember memName="Lila laconsia" memPos="UI Designer" memPic="images/img_rectangle_18.png"/>
              <TeamMember memName="Ana louren" memPos="Illustrator" memPic="images/img_rectangle_19.png"/>
              <TeamMember memName="Rico John" memPos="UX Principles" memPic="images/img_rectangle_20.png"/>
              <TeamMember memName="Randy okla" memPos="Interaction Designer" memPic="images/img_rectangle_21.png"/>
              <TeamMember memName="Sinta Marcus" memPos="UX writer" memPic="images/img_rectangle_22.png"/>
              <TeamMember memName="Sam Rivald" memPos="Front-end Dev" memPic="images/img_rectangle_23.png"/>
            </div>
            <Moments />
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
