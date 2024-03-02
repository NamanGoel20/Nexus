import React from "react";
import { Img } from "components";
import { HeaderButton } from "./HeaderButton"

const allPageNames = ["Home", "About", "Works", "Contact"];

const HeaderComp = ({pageName}) => {
    const highlightCurrentPage = () => {
        const headerPages = allPageNames.map((page,i) => {
            if(pageName === page.toLocaleLowerCase()) {
                return (
                    <HeaderButton key={i} propClass="!text-red-400_01 text-center" pageName={page.toLowerCase()}>
                        {page}
                    </HeaderButton>
                );
            } else {
                return (
                    <HeaderButton key={i} propClass="text-center" pageName={page.toLowerCase()}>
                        {page}
                    </HeaderButton>
                );
            }
        })
        return headerPages;
    };

    return (
    <header className="flex flex-row justify-between items-center w-full p-[15px]">
        <Img src="images/img_group_642.svg" alt="image" className="h-[50px] ml-[149px]" />
        <div className="flex flex-row justify-between items-start w-[30%] mr-[166px]">
            {highlightCurrentPage()}
        </div>
    </header>
  );
}

export { HeaderComp };

