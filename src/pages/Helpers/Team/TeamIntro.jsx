import React from "react";
import { Heading } from "../../../components";
import TeamMember from "./TeamMember";
import { useNavigate } from "react-router-dom";

const TeamIntro = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    }
    return (
        <div className="flex flex-col items-center justify-start w-full gap-[33px]">
            <div className="flex flex-row justify-between items-start w-full">
                <Heading size="4xl" as="h2">
                    Meet our team
                </Heading>
                <div className="mt-[11px]" onClick={handleClick}>
                    <Heading size="lg" as="h3" className="!text-red-400_01 text-right">
                      View All
                    </Heading>
                </div>
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