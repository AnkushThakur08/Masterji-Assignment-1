import React from "react";
import { faker } from '@faker-js/faker';
import { format } from "date-fns";
import { Separator } from "../../ui/separator";
import CommentIcon from "../../../assets/svg/jokes/CommentIcon";
import ShareIcon from "../../../assets/svg/jokes/ShareIcon";
import HeartIcon from "../../../assets/svg/jokes/HeartIcon";
import BookMarkIcon from "../../../assets/svg/jokes/BookMark";
import UploadIcon from "../../../assets/svg/jokes/UploadIcon";

interface IContentProps {
    jokes: string
}


const Content: React.FC<IContentProps> = ({ jokes }) => {
    const randomDate = faker.date.past();
    const formatNumberWithK = (num: number) => {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
            return `${Math.floor(num / 1000)}k`;
        }
        return num;
    };
    return (
        <>
            <p>{jokes}</p>
            <div className="flex gap-2 my-6 justify-start items-center">
                <p className="text-base font-inter text-[#A0A0A0]">{format(randomDate, 'hh:mm a')} . </p>
                <p className="!mt-0 text-base font-inter text-[#A0A0A0]"> {format(randomDate, 'dd, MMMM, yyyy')} .</p>
                <p className="!mt-0 text-base font-inter text-white">{formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))} <span className="text-[#A0A0A0]">Views</span></p>
            </div>

            <Separator className="bg-[#71767B]" />
            <div className="flex justify-between my-5">
                <p className="flex gap-1 items-center">
                    <CommentIcon className="h-6 w-6" />
                    {formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))}
                </p>

                <p className="flex gap-1 items-center">
                    <ShareIcon className="h-6 w-6" />
                    <span>{formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <HeartIcon className="h-6 w-6" />
                    <span>{formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <BookMarkIcon className="h-6 w-6" />
                    <span>{formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <UploadIcon className="h-6 w-6" />
                    <span>{formatNumberWithK(faker.number.int({ min: 1, max: 1000000 }))}</span>
                </p>
            </div>

            <Separator className="bg-[#71767B]" />
        </>

    )
}

export default Content;