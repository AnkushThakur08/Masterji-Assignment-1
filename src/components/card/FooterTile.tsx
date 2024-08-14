import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";

const FooterTile = () => {
    return (
        <div className="flex justify-end items-baseline gap-32">
            <div>
                <p className="font-dm text-white">© chai aur code</p>
            </div>
            <div className="cursor-pointer">
            <Link to="https://chaicode.com/">
                <Logo />
            </Link>
            </div>
        </div>
    )

}

export default FooterTile