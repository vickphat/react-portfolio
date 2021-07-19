import React from 'react';
import profile from "../images/profile2.jpg"

const AboutMe = () => {
    return (
        <div className=" container-fluid col-sm-12 card text-white bg-dark mb-3">
            <img src={profile} className="mx-auto rounded-circle" alt="profile" />
            <div className="card-body" id="AboutMe">
                <h1 className="card-title">About Me</h1>
                <p className="card-text">HELLO! Welcome to my portfolio. My name is Vicheka Phat. However, I prefer
                    to go by the name Vick. Currently, I am a partial owner of a nail salon
                    located in Westlake. I have been in this line of work for 10 years. I have always
                    been passionate when it came to technology. I have built my own PC in the past and
                    I am currently in the middle of upgrading it now. I have an Associate Degree of
                    Applied Business in Networking Software. I am currently going to Case Western Reserve
                    and I am doing the bootcamp for coding. I believe this will further increase my chances
                    of finding a job in the IT world.</p>
            </div>
        </div>
    )
}

export default AboutMe;