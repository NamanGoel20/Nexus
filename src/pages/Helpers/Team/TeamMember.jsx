import React from "react";
import { Text, Heading, Img } from "../../../components";

const TeamMember = ({memName, memPos, memPic}) => {
    return (
        <div className="flex flex-col items-center justify-start w-[32%] mb-1 gap-[39px]">
            <Img src={memPic} alt="image" className="w-full object-cover rounded-[10px]" />
            <div className="flex flex-col items-center justify-start w-[44%] gap-3">
                <Heading size="xl" as="h4" className="!text-gray-800_01">
                    {memName}
                </Heading>
                <Text as="p" className="!text-black-900_68">
                    {memPos}
                </Text>
            </div>
        </div>
    );
}

export default TeamMember;