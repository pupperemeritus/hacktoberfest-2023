"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    const mask = document.querySelector("#recfill");

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top left",
        scrub: 1,
      },
    });
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}

      <div ref={triggerRef}>
        <svg
          className=" top-40 absolute mx-auto px-4 w-full"
          width="1004"
          height="11"
          viewBox="0 0 1004 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="1000"
            height="9"
            rx="4.5"
            stroke="#D2B863"
            stroke-width="2"
          />
          <rect
            id="recfill"
            x="2"
            y="2"
            width="10"
            height="7"
            rx="3.5"
            fill="#33B6D8"
          />
        </svg>
        <div ref={sectionRef} className="scroll-section-inner relative">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
