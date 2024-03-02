import React from "react";
import { Text, Heading, Img, Button } from "../../../components";
import Task from "./Task";

const TasksHome = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full gap-[34px]">
            <Heading size="4xl" as="h1">
                What we do
            </Heading>
            <div className="flex flex-row justify-center w-full px-14 py-28 bg-red-50 rounded-[90px]">
                <div className="flex flex-row w-[85%] mb-1.5 gap-[102px] mx-[27px]">
                    <Task 
                        btnColor="red_300" 
                        btnClass="w-[46px]" 
                        imgSrc="images/img_group_670.svg" 
                        headingContent="UI/UX Design" 
                        text="We can make your website or application design better with this service"
                    />
                    <Task 
                        btnColor="cyan_400" 
                        btnClass="w-[46px] mt-3" 
                        imgSrc="images/img_support_1.svg" 
                        headingContent="Website Dev" 
                        text="Make your business more leverage by having an optimal website and we are ready to help"
                    />
                    <Task 
                        btnColor="lime_800" 
                        btnClass="w-[46px]" 
                        imgSrc="images/img_idea_1.svg" 
                        headingContent="Branding & Product" 
                        text="we can also help you in the affairs of product branding so that your products can be more
                        riveting"
                    />
                </div>
            </div>
        </div>
    );
}

export default TasksHome;