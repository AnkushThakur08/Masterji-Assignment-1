import React, {useEffect, useState } from "react"
import axios from "axios"
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IUserObject } from "../interfaces/IUser";
import Footer from "./card/Footer";
import Content from "./card/Content";
import Title from "./card/Title";
import FooterTile from "./card/FooterTile";

export interface IUser {
    data: IUserObject
}

const UserCard: React.FC = () => {
    const [user, setUser] = useState<IUser>()
    const getData = async () => {
        const data = await axios.get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
        setUser(data?.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            {user && (
                <Card className="w-[550px] p-8 bg-[#B6B3F3] rounded-2xl border-[12px] border-white">
                    <Title getData={getData} />

                    <CardHeader className="items-center">
                        <Avatar>
                            <AvatarImage src={user?.data?.picture?.thumbnail ?? "-"} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>

                    <CardContent className="text-center">
                        <Content user={user} />
                    </CardContent>

                    <CardFooter>
                        <Footer user={user} />
                    </CardFooter>

                    <FooterTile />
                </Card>
            )}
        </div>
    )
}

export default UserCard