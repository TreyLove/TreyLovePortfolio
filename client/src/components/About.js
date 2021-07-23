import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className="header">About</h1>

            <div>
                <footer>
                    <div class="picpos">
                        <img src="./images/profPicture.jpg" alt="Picture of Trey Love the creator of this website"
                            class="profilepic" />
                    </div>

                    <div id="aboutme" class="aboutme">
                        <h2>About Me</h2>
                        <p>My name is Trey Love, I live in the Greater Seattle Area and I am currently studying to become a full
                            stack developer at the University of
                            Washington.
                            The languages I am currently versed in are HTML, CSS and JavaScript, with more to come as I progress as
                            a developer.
                        </p>



                    </div>



                    <div id="contact" class="contact">
                        <h2>Contact</h2>
                        <li>Number: 206-681-5838</li>

                        <li>Email: TreyLove.Prog@gmail.com</li>

                        <li><a href="https://www.linkedin.com/in/trey-love-7a75b1a2/">My LinkedIn profile</a></li>

                        <li><a href="https://github.com/TreyLove">My Github</a></li>

                        <li><a href="https://drive.google.com/file/d/1J-Sjz21L0nS6qzwIcfnCg_NOnoh6tphi/view?usp=sharing">My
                            Resume</a></li>
                        <br /><br /><br />

                    </div>
                </footer>
            </div>


        </div>
    )
}
