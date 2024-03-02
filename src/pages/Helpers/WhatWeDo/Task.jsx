import React from "react";
import { Text, Heading, Img, Button } from "../../../components";

const hoverOuterClass = "flex flex-col items-start justify-center w-[31%] gap-[34px] p-[25px] bg-white-A700 shadow-xs cursor-pointer rounded-[30px] hover:shadow-xs";
const normalOuterClass = "flex flex-col items-start justify-start w-[27%] gap-9 my-[35px] cursor-pointer hover:shadow-xs";
const hoverHeadingClass = "flex flex-col items-start justify-start mb-2 gap-[15px]";
const normalHeadingClass = "flex flex-col items-start justify-start w-full gap-[13px]";

const Task = ({btnColor, btnClass, imgSrc, headingContent, text}) => {
    return (
        <div className="flex flex-col items-start justify-start w-[23%] gap-9 my-[35px] cursor-pointer hover:shadow-xs">
            <Button color={btnColor} className={btnClass}>
                <Img src={imgSrc} />
            </Button>
            <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="xl" as="h4">
                    {headingContent}
                </Heading>
                <Text size="xs" as="p" className="!leading-[30px]">
                    {text}
                </Text>
            </div>
        </div>
    );
}

export default Task;