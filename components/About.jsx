import React from "react";

function About() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2">
        <h1 className=" text-center text-3xl text-bblue-200 shimmerb">
          About The Event
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      {/* <p>
        CBIT Open Source Community, an esteemed tech community based in
        Chaitanya Bharathi Institute of Technology - Hyderabad, is dedicated to
        promoting an open-source ethos. We organize a diverse range of events
        such as hackathons, bootcamps, and workshops, aimed at educating
        students about various technologies while actively fostering a culture
        of open source. In these dynamic gatherings, students immerse themselves
        in collaborative coding sessions, innovative problem-solving challenges,
        and hands-on experiences, all centered around open source principles. By
        embracing this approach, we empower students to not only learn about
        cutting-edge technologies but also actively contribute to their
        development and dissemination.
      </p>
      <h1>About the event</h1> */}
      <div className=" py-6 w-[85%] mx-auto">
        <p>
          Hacktober fest is our annual flagship event held in October. It is a
          month long festival held to encourage students to work on open source
          software. We are thrilled to present you our 24-hour online "CBIT
          Hacktoberfest Hackathon" as a part of it. Hacktoberfest is presented
          by DigitalOcean,Appwrite and ILLA cloud.
        </p>
      </div>
    </div>
  );
}

export default About;
