import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import RefershIcon from "../assets/svg/refreshIcon";
import BackIcon from "../assets/svg/BackIcon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IUser } from "../interfaces/IUser";
import { Separator } from "./ui/separator";
import LocationIcon from "../assets/svg/LocationIcon";
import CallMeIcon from "../assets/svg/CallMeIcon";
import { format } from 'date-fns';

interface IJokes {
    data: IUser
}

const RandomUser: React.FC = () => {

    const [jokes, setJokes] = useState<IJokes>()

    const getData = async () => {
        const data = await axios.get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
        setJokes(data?.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleNextUser = useCallback(() => {
        getData();
    }, [])

    const handleCallMe = useCallback(() => {
        window.location.href = `tel: ${jokes?.data?.phone}`
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <Card className="w-[550px] p-8 bg-[#B6B3F3] rounded-2xl border-[12px] border-white">
                {/* Card Upper Header */}
                <div className="flex justify-between">
                    <BackIcon className="cursor-pointer" onClick={handleNextUser} />
                    <p>Profile Overview</p>
                    <RefershIcon className="cursor-pointer" onClick={handleNextUser} />
                </div>

                <CardHeader className="items-center">
                    <Avatar>
                        <AvatarImage src={jokes?.data?.picture?.thumbnail ?? "-"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>

                <CardContent className="text-center">
                    <p className="font-donegal text-2xl leading-8 font-normal mb-4">{jokes?.data?.name?.title} {" "} {jokes?.data?.name?.first} {" "} {jokes?.data?.name?.last}</p>
                    <p className="font-dm mb-4">{jokes?.data?.login?.username ?? "-"}</p>
                    <Separator className="bg-black opacity-20" />
                    <div className="flex justify-center gap-10 my-4">
                        <div className="flex justify-center gap-2 items-center">
                            <div className="bg-black rounded-full w-8 h-8 grid place-items-center">
                                <LocationIcon />
                            </div>
                            <p>Location</p>

                        </div>

                        <div className="flex justify-center gap-2 cursor-pointer items-center" onClick={handleCallMe}>
                            <div className="bg-black rounded-full w-8 h-8 grid place-items-center">
                                <CallMeIcon />
                            </div>
                            <p>Call Me</p>
                        </div>
                    </div>
                    <Separator className="bg-black opacity-20" />
                </CardContent>

                <CardFooter className="flex justify-between">
                    <div className="grid grid-cols-2 w-full">
                        <div>
                            <p className="font-dm text-xs">City</p>
                            <p>{jokes?.data?.location.city ?? "-"}</p>
                        </div>

                        <div>
                            <p className="font-dm text-xs">Nationality</p>
                            <p>{jokes?.data?.location.country ?? "-"}</p>
                        </div>

                        <div>
                            <p className="font-dm text-xs">Date of birth</p>
                            <p>{jokes?.data?.dob?.date ? format(new Date(jokes?.data?.dob?.date), 'dd, MMMM, yyyy') : "-"}</p>
                        </div>

                        <div>
                            <p className="font-dm text-xs">Phone Number</p>
                            <p>{jokes?.data?.phone ?? "-"}</p>
                        </div>

                        <div>
                            <p className="font-dm text-xs">Time Zone</p>
                            <p>{jokes?.data?.location?.timezone?.offset ?? "-"}</p>
                            <span>{jokes?.data?.location?.timezone?.description ?? "-"}</span>
                        </div>

                        <div>
                            <p className="font-dm text-xs">Registered Since</p>
                            <p>{jokes?.data?.registered?.date ? format(new Date(jokes?.data?.registered?.date), 'dd, MMMM, yyyy') : "-"}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RandomUser