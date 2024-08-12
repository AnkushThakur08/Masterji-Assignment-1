import axios from "axios";
import React, { useEffect, useState } from "react";

interface IJokesObject {
    cell: string;
    email: string
    gender: string;

}
interface IJokes {
    data: IJokesObject
}


const RandomUser: React.FC = () => {
    const [jokes, setJokes] = useState<IJokes>();
    const getJokes = async () => {
        const data = await axios.get("https://api.freeapi.app/api/v1/public/randomusers/user/random");
        setJokes(data?.data)
    }

    useEffect(() => {
        getJokes();
    }, [])


    return (
        <div>
            <h1>Random User  Page</h1>
        </div>
    )
}

export default RandomUser