import React from "react";
import Card from "./Card";

const ps = [
  {
    ptitle: "Healthcare Practice Management System.",
    descTitle: "Description:",
    content: "Create a mobile app or web app that facilitates user registration and login, enabling users to access and manage their profiles. It offers features such as appointment scheduling, secure file uploads and viewing, comprehensive treatment planning, cost estimation, and seamless billing generation for efficient healthcare practice management vscxkasdxy EADSXHWEF DILC HAKYU FGDCLAHWFDCGAUWIEFGYWEFJLHAEKYUSDFHCIO;AWEGF TGUILdxyufgacluig",
  },
  {
    ptitle: "Hostel Management System",
    descTitle: "Description:",
    content: "Develop an adaptive SQL injection prevention system for web applications that effectively detects and blocks injection attempts, minimizes false positives/negatives, integrates seamlessly with diverse tech stacks, ensures compliance, and offers performance optimization while being developer-friendly and cost-effective.",
  },
  {
    ptitle: "Problem Statement-3",
    descTitle: "Description:",
    content: "hasgckuasdhc bafsdjv avryfs",
  },
  {
    ptitle: "Problem Statement-4",
    descTitle: "Description:",
    content: "figma is nice",
  },
];

function Mentors() {
  return (
    <>
      {ps.map((p, i) => (
        <div key={i} className="flex gap-2 flex-col">
          <Card {...p} />
        </div>
      ))}
    </>
  );
}

export default Mentors;
