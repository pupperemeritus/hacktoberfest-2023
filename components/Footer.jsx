import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className=" w-[85%] mx-auto mb-16 ">
      <div>
        <p className="text-center text-Manga-100">
          COSC is an open source focused tech community based in Chaitanya
          Bharathi Institute of Technology - Hyderabad. We conduct hackathons,
          bootcamps and workshops to teach students different technologies while
          promoting open source culture.
        </p>
      </div>
      <div className=" self-center w-fit mx-auto my-8">
        <div className=" flex  gap-2">
          <Link href="https://www.facebook.com/cbitosc/">
            <Image src="/images/facebook.svg" width={40} height={40} />
          </Link>
          <Link href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09">
            <Image src="/images/twitter.svg" width={40} height={40} />
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
          <Link className="foot" href="https://hacktoberfest.com/">
            Hacktoberfest
          </Link>
        </div>
        <div>
          <Link className="foot" href="https://cbitosc.github.io/">
            CBIT Open Source Community
          </Link>
        </div>
        <div>
          <Link className="foot" href="https://cbitosc.github.io/coc/">
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
