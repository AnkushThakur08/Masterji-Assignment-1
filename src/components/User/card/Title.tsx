import React, { useCallback } from "react";
import BackIcon from "../../../assets/svg/BackIcon";
import RefershIcon from "../../../assets/svg/refreshIcon";

interface ITitleProps {
    getData: () => void;
}


const Title: React.FC<ITitleProps> = ({getData}) => {
    const handleNextUser = useCallback(() => {
        getData();
    }, [])
    return (
        <div className="flex justify-between">
            <BackIcon className="cursor-pointer" onClick={handleNextUser} />
            <p>Profile Overview</p>
            <RefershIcon className="cursor-pointer" onClick={handleNextUser} />
        </div>

    )
}

export default Title