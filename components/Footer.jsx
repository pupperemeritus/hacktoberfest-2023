import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className=" w-[85%] mx-auto mb-16 sm-spacing h-min">
      <div>
        <p className="text-center text-lg text-Manga-100">
          <br />
          <br />
          <strong className="shimmerb text-bblue-200">What We Do</strong>
          <br />
          <br />
          At COSC, we're more than just an event organizer; we're a community
          dedicated to advancing the open source culture. We host hackathons,
          conduct bootcamps, and facilitate workshops to equip students with the
          skills they need to thrive in the world of technology. Through our
          events, we nurture creativity, collaboration, and innovation.
          <br />
          <br />
          <strong className="shimmerb text-bblue-200">Join Us on This Journey</strong>
          <br />
          <br />
          HacktoberFest isn't just an event; it's a chance to be part of
          something bigger, to embrace the power of open source, and to make an
          impact in the tech world. So, whether you're a seasoned developer, a
          curious beginner, or simply someone with a passion for technology, we
          invite you to join us on this exhilarating journey. Let's learn, code,
          and celebrate the magic of open source together!
        </p>
      </div>
      <div className=" self-center w-fit mx-auto my-8">
        <div className=" flex  gap-2">
          <Link href="https://www.facebook.com/cbitosc/">
            <Image src="/images/facebook.svg" width={40} height={40} />
          </Link>
          <Link href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09">
            <Image src="/images/x.png" width={40} height={40} />
          </Link>
          <Link href="https://www.instagram.com/cbitosc/">
            <Image src="/images/insta.svg" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/company/cbitosc/">
            <Image src="/images/linkedin.svg" width={40} height={40} />
          </Link>
        </div>
      </div>

      <div className=" flex justify-between font-thin  flex-col md:flex-row items-center gap-4 text-bgold-200">
        <div>
          <Link className="shimmer text-lg" href="https://hacktoberfest.com/">
            Hacktoberfest
          </Link>
        </div>
        <div>
          <Link className="shimmer" href="https://cbitosc.github.io/">
            CBIT Open Source Community
          </Link>
        </div>
        <div>
          <Link className="shimmer" href="https://cbitosc.github.io/coc/">
            Code Of Conduct
          </Link>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default Footer;
