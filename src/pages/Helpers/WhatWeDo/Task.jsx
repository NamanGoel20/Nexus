import React, { useState } from "react";
import { Text, Heading, Img, Button } from "../../../components";

const Task = ({btnColor, btnClass, imgSrc, headingContent, text}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div 
            className="flex flex-col items-start justify-start w-[23%] gap-9 my-[35px] cursor-pointer hover:shadow-xs"
            style={{padding: "15px", backgroundColor: isHover ? "white" : "#ffecec"}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
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