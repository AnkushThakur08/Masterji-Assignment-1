import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import BackIcon from "../../assets/svg/jokes/BackIcon"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import VerifiedBadge from "../../assets/svg/jokes/VerifiedBagde"
import VerifiedTick from "../../assets/svg/jokes/VerifiedTick"



const Jokes: React.FC = () => {
    const [jokes, setJokes] = useState<string>()
    const getData = async () => {
        const data = await axios.get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
        console.log("data", data);
        setJokes(data?.data?.data?.content)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            {jokes && (
                <Card className="w-[550px] p-8 bg-black text-white">
                    <div className="flex flex-row gap-4 items-center">
                        <BackIcon />
                        <div className="!mt-0 text-base font-bold font-inter">Post</div>
                    </div>
                    <CardHeader className="flex-row items-center px-0 gap-1">
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
                    </CardHeader>

                    <CardContent className="text-left font-inter">
                        <p>{jokes}</p>
                    </CardContent>

                    <CardFooter>
                        {/* <Footer user={user} /> */}
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}

export default Jokes