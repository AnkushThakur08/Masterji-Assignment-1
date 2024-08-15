import React from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import VerifiedBadge from "../../../assets/svg/jokes/VerifiedBagde";
import VerifiedTick from "../../../assets/svg/jokes/VerifiedTick"

const Header: React.FC = () => {
    return (
        <>
            <Avatar className="h-15 w-15">
                <AvatarImage src={"ElonMusk.svg"} />
            </Avatar>
            <div className="flex flex-col">
                <p className="flex items-center">
                    <span className="inline-flex items-center font-inter font-bold">
                        Elon Musk
                        <VerifiedBadge className="ml-1" />
                        <VerifiedTick className="-ml-3" />
                    </span>
                </p>
                <p className="text-[#A0A0A0] text-xs font-normal font-inter">@elonmusk</p>
            </div>
        </>
    )
}


export default Header