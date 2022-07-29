import Email from "../img/email-icon.png"
import Linkedin from "../img/linkedin-icon.png"

export default function Buttons() {
    return(
        <>
            <div className="buttons container">
                <a className="email-btn"><img src={Email} alt="Email Icon" />Email</a>
                <a className="linkedin-btn" href="https://www.linkedin.com/in/christina-wu-43213630" target="_blank"><img src={Linkedin} alt="Linkedin Icon" />LinkedIn</a>
            </div>
        </>
    )
}