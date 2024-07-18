import Hero from "@/components/Hero";
import Grid from "../components/Grid";
import About from "../components/About";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        {/* <About /> */}
        <Grid />
        <div className="pb-10"></div>
      </div>
    </main>
  );
}
