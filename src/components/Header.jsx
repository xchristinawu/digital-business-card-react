import Profile from "../img/profile-pic.jpg"

export default function Header() {
    return (
        <>
            <div className="header">
                <img className="profile-pic" src={Profile} alt="Profile Picture" />
                <div className="contact">
                    <h1>Christina Wu</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </>
    )
}