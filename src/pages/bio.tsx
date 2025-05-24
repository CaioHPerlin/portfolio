import GradientBox from "../components/gradient-box";

export default function Bio() {
  return (
    <div
      className="flex flex-col w-[45rem] gap-16
     mx-auto text-center py-[15vh]"
    >
      <div className="space-y-4">
        <img src="" alt="" />
        <h1>Caio Hygino Perlin de Lima</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <GradientBox className="w-full h-32" />
      <main className="text-left space-y-8">
        <section>
          <h1>Myself</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            mollitia aperiam aliquam consectetur explicabo odio praesentium ipsa
            sunt eaque deserunt repellendus assumenda molestiae, enim id
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
                Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores at
                voluptas tempore quam suscipit officia repudiandae natus ipsam
                nulla itaque odit minima!
              </p>
            </li>
            <li>
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl!">Example</h1>
                <span>00/0000 — 00/0000</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores at
                voluptas tempore quam suscipit officia repudiandae natus ipsam
                nulla itaque odit minima!
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
                Accusantium, nisi! Dolorem ea ab quisquam aut vel, asperiores at
                voluptas tempore quam suscipit officia repudiandae natus ipsam
                nulla itaque odit minima!
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
