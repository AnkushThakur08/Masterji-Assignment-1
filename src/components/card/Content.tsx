import React, { useCallback } from "react"
import { IUser } from "../RandomUser"
import { Separator } from "../ui/separator"
import LocationIcon from "../../assets/svg/LocationIcon"
import CallMeIcon from "../../assets/svg/CallMeIcon"

interface IContentProps {
    user: IUser
}

const Content: React.FC<IContentProps> = ({ user }) => {
    const handleCallMe = useCallback(() => {
        window.location.href = `tel: ${user?.data?.phone}`
    }, [])

    const handleGetLocation = useCallback((latitude: string, longitude: string) => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
        window.open(url, '_blank');
    }, [])
    return (
        <>
            <p className="font-donegal text-2xl leading-8 font-normal mb-4">{user?.data?.name?.title} {" "} {user?.data?.name?.first} {" "} {user?.data?.name?.last}</p>
            <p className="font-dm mb-4">{user?.data?.login?.username ?? "-"}</p>
            <Separator className="bg-black opacity-20" />
            <div className="flex justify-center gap-10 my-4">
                <div className="flex justify-center gap-2 items-center">
                    <div className="bg-black rounded-full w-8 h-8 grid place-items-center cursor-pointer" onClick={() => handleGetLocation(user?.data?.location?.coordinates?.latitude ?? "-", user?.data?.location?.coordinates?.longitude ?? "-")}>
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
        </>
    )
}

export default Content