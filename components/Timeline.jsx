"use client";

import React, { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "25vmin",
      },
      {
        translateX: "-575vmin",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

    const mask = document.querySelector("#recfill");

    gsap.to(mask, {
      width: "998",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top left",
        end: "2000 top",
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}

      <div ref={triggerRef}>
        <div className=" top-24 absolute w-full">
          <h1 className=" w-min mx-auto shimmer text-3xl">Timeline</h1>
        </div>
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
          <div className="scroll-section   mt-60 mx-4 w-[50vmin]">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full ">
              <h1 className=" text-2xl tracking-tighter ">
                24th September, 2023
              </h1>
              <div className="flex flex-col items-start">
                <span className=" text-xl">Registrations Begin</span>
                <Link href="/register">
                  <button className=" px-6 py-3 bg-none hover:bg-Manga-100 hover:bg-opacity-10 duration-300 my-2  text-bgold-200 border border-bgold-200 rounded-lg text-xl mt-3">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>4th October, 2023</h1>
                <h1>11:59 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Registrations End</span>
                <p className=" text-sm"></p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>6th October, 2023</h1>
                <h1>7:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Introductory Session</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>7th October, 2023</h1>
                <h1>4:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Opening Ceremony</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>7th October, 2023</h1>
                <h1>6:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">
                  Releasing Problem Statements
                </span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>7th October, 2023</h1>
                <h1>6:30 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">
                  Selection of problem statements
                </span>
                <p className=" text-sm text-bgold-300">
                  Teams will be given until 6:45 PM to fill out their choices
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>7th October, 2023</h1>
                <h1>7:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Coding begins!</span>
                <p className=" text-sm text-bgold-300">
                  Problem statements are assigned to the teams and coding
                  begins.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>2:00 AM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Ice Breaker Session - 1</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>9:00 AM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Ice Breaker Session - 2</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>4:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Coding Ends</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>4:30 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Submissions Close</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>5:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Presentations</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-section   mt-60 mx-4 w-[50vmin] ">
            <div className="  text-bgold-200 h-60 px-8 py-4 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full">
              <div className=" tracking-tighter text-2xl">
                <h1>8th October, 2023</h1>
                <h1>8:00 PM</h1>
              </div>
              <div className=" flex flex-col items-start">
                <span className=" text-xl pb-3">Closing Ceremony</span>
                <p className=" text-sm text-bgold-300">
                  A short introductory session on GitHub and Discord.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
