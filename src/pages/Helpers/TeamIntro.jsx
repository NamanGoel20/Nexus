import React from "react";
import { Heading } from "../../components";
import TeamMember from "./TeamMember";

const TeamIntro = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full gap-[33px]">
            <div className="flex flex-row justify-between items-start w-full">
                <Heading size="4xl" as="h2">
                    Meet our team
                </Heading>
                <a href="#" className="mt-[11px]">
                    <Heading size="lg" as="h3" className="!text-red-400_01 text-right">
                      View All
                    </Heading>
                </a>
            </div>
            <div className="flex flex-row w-full gap-[30px]">
                <TeamMember memName="Sarah Jae" memPos="Branding Specialist" memPic="images/img_rectangle_16.png"/>
                <TeamMember memName="John Doe" memPos="Product Designer" memPic="images/img_rectangle_15.png"/>
                <TeamMember memName="Samantha" memPos="SEO Specialist" memPic="images/img_rectangle_17.png"/>
            </div>
        </div>
    );
}

export default TeamIntro;