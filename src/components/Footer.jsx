import Twitter from "../img/twitter-icon.png"
import Facebook from "../img/facebook-icon.png"
import Instagram from "../img/instagram-icon.png"
import Github from "../img/Github-icon.png"

export default function Footer() {
    return (
        <>
            <div className="footer container">
                <a href="https://twitter.com/xchristinawu" target="_blank"><img src={Twitter} alt="Twitter Icon" /></a>
                <a><img src={Facebook} alt="Facebook Icon" /></a>
                <a><img src={Instagram} alt="Instagram Icon" /></a>
                <a href="https://github.com/xchristinawu" target="_blank"><img src={Github} alt="Github Icon" /></a>
            </div>
        </>
    )
}