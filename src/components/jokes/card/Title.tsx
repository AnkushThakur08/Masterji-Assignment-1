import React from "react";
import BackIcon from "../../../assets/svg/jokes/BackIcon";

const Title:React.FC = () => {
    return (
        <div className="flex flex-row gap-4 items-center">
            <BackIcon />
            <div className="!mt-0 text-base font-bold font-inter">Post</div>
        </div>
    )
}

export default Title






