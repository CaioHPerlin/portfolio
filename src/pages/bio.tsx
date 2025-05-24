import GradientBox from "../components/gradient-box";

export default function Bio() {
  return (
    <div
      className="flex flex-col w-[45rem] gap-16
     mx-auto text-center pt-[15vh]"
    >
      <div className="space-y-4">
        <h1>Caio Hygino Perlin de Lima</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <GradientBox className="w-full h-32" />
      <main className="text-left">
        <section>
          <h1>Myself</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            mollitia aperiam aliquam consectetur explicabo odio praesentium ipsa
            sunt eaque deserunt repellendus assumenda molestiae, enim id
            dignissimos aut minus expedita soluta.
          </p>
        </section>
      </main>
    </div>
  );
}
