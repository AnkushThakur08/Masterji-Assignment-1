import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import Title from "./card/Title"
import Header from "./card/Header";
import Content from "./card/Content";
import Logo from "../../assets/svg/Logo";


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
        <>
            <div className="flex flex-col items-center justify-center min-h-[90vh] bg-white">
                {jokes && (
                    <Card className="w-[750px] p-8 bg-black text-white">
                        <Title />
                        <CardHeader className="flex-row items-center px-0 gap-1">
                            <Header />
                        </CardHeader>

                        <CardContent className="text-left font-inter">
                            <Content jokes={jokes} />
                        </CardContent>

                        <CardFooter className="flex justify-center">
                            <p className="font-dm text-[#A0A0A0]">© chai aur code</p>
                        </CardFooter>
                    </Card>
                )}
            </div>

            <div className="flex justify-end  mx-4">
                <Logo />
            </div>
        </>
    )
}

export default Jokes