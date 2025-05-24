import GradientBox from "./components/gradient-box";

export default function App() {
  return (
    <div className="flex flex-col w-[45rem] gap-6 mx-auto text-center pt-[15vh]">
      <div className="space-y-4">
        <h1>Caio Hygino Perlin de Lima</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <GradientBox className="w-full h-32" />
    </div>
  );
}
