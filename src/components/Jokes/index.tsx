import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"


const Jokes:React.FC = () => {
    const [jokes, setJokes] = useState<string>()
    const getData = async () => {
        const data = await axios.get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
        console.log("data", data);
        setJokes(data?.data?.message)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            {jokes && (
                <Card className="w-[550px] p-8 bg-black border-white">

                    <CardHeader className="items-center">
                        {/* <Avatar>
                            <AvatarImage src={user?.data?.picture?.thumbnail ?? "-"} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar> */}
                    </CardHeader>

                    <CardContent className="text-center">
                        {/* <Content user={user} /> */}
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