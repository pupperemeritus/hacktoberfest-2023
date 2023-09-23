import React from "react";

function About() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2">
        <h1 className=" text-center text-3xl text-bgold-200 shimmer">
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
      <div className=" py-6 w-[85%] mx-auto text-center " >
        <p>
        About the Event
Welcome to HacktoberFest - the annual extravaganza that fuels the spirit of open source collaboration! 🚀<br /><br />

<br /><br /><strong>What is HacktoberFest?</strong><br /><br />
HacktoberFest, presented by DigitalOcean, Appwrite, and ILLA Cloud, is our flagship event, and it's not just an event; it's a month-long celebration of open source. Our goal is to ignite the passion for open source software among students and enthusiasts, fostering a sense of community, collaboration, and skill-building.

<br /><br /><strong>Why We're Thrilled</strong><br /><br />
We are beyond thrilled to present you with the "CBIT Hacktoberfest Hackathon," a 24-hour online coding challenge that's a core part of this incredible journey. As we dive into the world of open source, we aim to empower individuals like you to make meaningful contributions, expand your technical horizons, and forge connections with fellow open source enthusiasts.

<br /><br /><strong>Who We Are</strong><br /><br />
We are the Chaitanya Bharathi Institute of Technology Open Source Community (COSC), a dynamic tech community based in the heart of Hyderabad. Our mission is to champion open source values and provide a platform for students to explore, learn, and contribute to exciting technologies. At COSC, we don't just organize events; we craft experiences that inspire a lifelong love for open source.
        </p>
      </div>
    </div>
  );
}

export default About;
