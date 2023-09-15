import React from "react";
// import insta from '/images/insta.svg'
// import facebook from '/images/facebook.svg'
// import twitter from '/images/twitter.svg'
// import linkedin from '/images/linkedin.svg'

function footer(){
    return(
        <div>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <div>
                <h4>COSC is an open source focused tech community based in Chaitanya Bharathi Institute of Technology - Hyderabad. We conduct hackathons, bootcamps and workshops to teach students different technologies while promoting open source culture.</h4>
            </div>
            <div>
                <a href="https://www.facebook.com/cbitosc/"><img className="logo"src={facebook}/></a>
                <a href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09"><img className="logo"src={twitter}/></a>
                <a href="https://www.instagram.com/cbitosc/"><img className="logo"src={insta}/></a>
                <a href="https://www.linkedin.com/company/cbitosc/"><img className="logo"src={linkedin}/></a>
            </div>
            <div>
                <a className="foot" href="https://hacktoberfest.com/">Hacktober Fest</a>
            </div>
            <div>
                <a className="foot" href="https://cbitosc.github.io/">CBIT Open Source Community</a>
            </div>
            <div>
                <a className="foot" href="https://cbitosc.github.io/coc/">Code Of Counduct</a>
            </div>
        </div>
    )
}

export default footer