import PageHeading from "../components/page-heading";

export default function BioPage() {
  return (
    <div className="">
      <PageHeading
        title="Caio Hygino Perlin de Lima"
        subtitle="Full-Stack Developer"
      />
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
