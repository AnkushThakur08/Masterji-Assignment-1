import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import { ICat } from "../../interfaces/ICat";


const Cat: React.FC = () => {
    const [cats, setCats] = useState<ICat[]>()

    const getData = async () => {
        const data = await axios.get(" https://api.freeapi.app/api/v1/public/cats?page=1&limit=4")
        console.log(data);
        setCats(data?.data?.data?.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="flex justify-end m-4">
                <Link to="https://chaicode.com/">
                    <Logo />
                </Link>
            </div>
            <div className="flex justify-around gap-6 my-20 mx-6">
                {cats && cats?.length >= 1 ?
                    cats.map((cat) => {
                        return (
                            <Card className="w-[460px] rounded-2xl">
                                <CardHeader className="p-0">
                                    <img className="rounded-2xl h-96 object-cover" src={cat?.image} alt="cat-image" />
                                </CardHeader>

                                <CardFooter className="flex flex-col items-start pt-6 gap-4">
                                    <div>
                                        <p className="font-dm font-medium text-lg">{cat?.name}</p>
                                        <p className="font-dm font-normal text-sm">{cat?.description}</p>
                                    </div>

                                    <div className="flex gap-8">
                                        <p className="font-dm font-medium text-sm">Origin</p>
                                        <p className="font-dm font-normal text-sm">{cat?.origin}</p>
                                    </div>

                                    <div className="">
                                        <p className="font-dm font-medium text-sm">Temperament</p>
                                        <p className="font-dm font-normal text-sm">{cat?.temperament}</p>
                                    </div>

                                    <div className="flex gap-8">
                                        <p className="font-dm font-medium text-sm">Life Span</p>
                                        <p className="font-dm font-normal text-sm">{cat?.life_span}</p>
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                    })
                    :
                    <p>No Data Found</p>}
            </div>
        </>

    )
}

export default Cat