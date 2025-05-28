import { useScroll, motion, useTransform } from "motion/react";
import PageHeading from "../components/page-heading";
import { useRef } from "react";
import ParallaxSeparator from "../components/parallax-separator";

export default function MyselfPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <>
      {/* hero */}
      <div
        ref={heroRef}
        className="
          select-none
          flex flex-col w-full h-[100vh]
          border-1 border-accent/30 
          bg-gradient-to-br from-background via-secondary to-primary
          bg-size-[400%_400%]
          animate-bg-pan
          relative
          overflow-hidden
        "
      >
        {/* Text content aligned to top */}
        <motion.div
          style={{ y: heroTextParallax }}
          className="w-[75vw] mx-auto pt-[20vh]"
        >
          <h1 className="text-[5rem]! 2xl:text-[7rem]! leading-24 2xl:leading-32 font-semibold">
            Caio Hygino
            <br />
            Full Stack Developer
          </h1>
          <p className="py-0! text-2xl!">
            this portfolio is still a{" "}
            <em className="not-italic text-transparent font-bold bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text">
              work in progress!
            </em>
          </p>
        </motion.div>

        {/* Parallax separator aligned to bottom */}
        <div className="w-full mt-auto">
          <ParallaxSeparator scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* content */}
      <div className="w-[45rem] mx-auto pt-20 pb-10">
        <PageHeading title="Myself" subtitle="Full-Stack Developer" />
        <main className="text-left space-y-8">
          <section>
            <h1>Myself</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              mollitia aperiam aliquam consectetur explicabo odio praesentium
              ipsa sunt eaque deserunt repellendus assumenda molestiae, enim id
              dignissimos aut minus expedita soluta.
            </p>
          </section>
          <section>
            <h1>Professional Experience</h1>
            <ul className="flex flex-col pt-6 gap-4">
              <li>
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl!">Example</h1>
                  <span>00/0000 — 00/0000</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores
                  at voluptas tempore quam suscipit officia repudiandae natus
                  ipsam nulla itaque odit minima!
                </p>
              </li>
              <li>
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl!">Example</h1>
                  <span>00/0000 — 00/0000</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores
                  at voluptas tempore quam suscipit officia repudiandae natus
                  ipsam nulla itaque odit minima!
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h1>Education</h1>
            <ul className="flex flex-col pt-6 gap-4">
              <li>
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl!">Example</h1>
                  <span>00/0000 — 00/0000</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores
                  at voluptas tempore quam suscipit officia repudiandae natus
                  ipsam nulla itaque odit minima!
                </p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
