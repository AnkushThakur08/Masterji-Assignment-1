import React from "react";
import { IUser } from "../RandomUser";
import { format } from 'date-fns';


interface IFooterProps {
    user: IUser
}


const Footer: React.FC<IFooterProps> = ({user}) => {
    return (
        <div className="grid grid-cols-2 gap-4 gap-x-32">
            <div>
                <p className="font-dm text-xs leading-3">City</p>
                <p className="font-sans text-xl font-normal opacity-70">{user?.data?.location.city ?? "-"}</p>
            </div>

            <div>
                <p className="font-dm text-xs leading-3">Nationality</p>
                <p className="font-sans text-xl font-normal opacity-70 ">{user?.data?.location.country ?? "-"}</p>
            </div>

            <div>
                <p className="font-dm text-xs leading-3">Date of birth</p>
                <p className="font-sans text-xl font-normal opacity-70 ">{user?.data?.dob?.date ? format(new Date(user?.data?.dob?.date), 'dd, MMMM, yyyy') : "-"}</p>
            </div>

            <div>
                <p className="font-dm text-xs leading-3">Phone Number</p>
                <p className="font-sans text-xl font-normal opacity-70 ">{user?.data?.phone ?? "-"}</p>
            </div>

            <div>
                <p className="font-dm text-xs leading-3">Time Zone</p>
                <p className="font-sans text-xl font-normal opacity-70 ">{user?.data?.location?.timezone?.offset ?? "-"}</p>
                <span>{user?.data?.location?.timezone?.description ?? "-"}</span>
            </div>

            <div>
                <p className="font-dm text-xs leading-3">Registered Since</p>
                <p className="font-sans text-xl font-normal opacity-70 ">{user?.data?.registered?.date ? format(new Date(user?.data?.registered?.date), 'dd, MMMM, yyyy') : "-"}</p>
            </div>
        </div>

    )
}

export default Footer