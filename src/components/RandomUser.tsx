import React, { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import RefershIcon from "../assets/svg/refreshIcon";
import BackIcon from "../assets/svg/BackIcon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IUser } from "../interfaces/IUser";
import { Separator } from "./ui/separator";

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
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-[550px] p-8">
                <div className="flex justify-between">
                    <BackIcon />
                    <p>Profile Overview</p>
                    <RefershIcon />
                </div>
                <CardHeader className="items-center">
                    <Avatar className="h-20 w-20">
                        <AvatarImage className="" src={jokes?.data?.picture?.thumbnail} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                    <p>{jokes?.data?.name?.title} {" "} {jokes?.data?.name?.first} {" "} {jokes?.data?.name?.last}</p>
                    <p>{jokes?.data?.login?.username}</p>
                    <Separator />
                    <div className="flex justify-center gap-20">
                        <p>Location</p>
                        <p>Call Me</p>
                    </div>
                    <Separator />
                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>
        </div>
    )
}

export default RandomUser