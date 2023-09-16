import React from "react";
import Image from 'next/image'
function footer(){
    return(
        <div>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <div>
                <h4>COSC is an open source focused tech community based in Chaitanya Bharathi Institute of Technology - Hyderabad. We conduct hackathons, bootcamps and workshops to teach students different technologies while promoting open source culture.</h4>
            </div>
            <div>
                <a href="https://www.facebook.com/cbitosc/"><Image src="/images/facebook.svg" width={50} height={50}/></a>
                <a href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09"><Image src="/images/twitter.svg" width={50} height={50}/></a>
                <a href="https://www.instagram.com/cbitosc/"><Image src="/images/insta.svg" width={50} height={50}/></a>
                <a href="https://www.linkedin.com/company/cbitosc/"><Image src="/images/linkedin.svg" width={50} height={50}/></a>
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