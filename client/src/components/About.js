import React from 'react'

export default function About() {
    return (
        <div >
            <h1 className="title">About</h1>

            <div className="aboutCont">

                <div className="picpos">
                    <img src="./profPicture.jpg" alt="Picture of Trey Love the creator of this website"
                        class="profPic" />
                </div>

                <div className="aboutMe">
                    <h2>About Me</h2>
                    <p>My name is Trey Love, I live in the Greater Seattle Area and have graduated from the full stack developer at the University of Washington.
                        The languages I am currently versed in are HTML, CSS and JavaScript, with more to come as I progress as
                        a developer.
                    </p>







                    <div className="contact">
                        <h2>Contact</h2>
                        <li>Number: 206-681-5838</li>

                        <li>Email: TreyLove.Prog@gmail.com</li>

                        <li><a href="https://www.linkedin.com/in/trey-love-7a75b1a2/">My LinkedIn profile</a></li>

                        <li><a href="https://github.com/TreyLove">My Github</a></li>

                        <li><a href="https://drive.google.com/file/d/1J-Sjz21L0nS6qzwIcfnCg_NOnoh6tphi/view?usp=sharing">My
                            Resume</a></li>
                        <br /><br /><br />

                    </div>
                </div>

            </div>


        </div>
    )
}
