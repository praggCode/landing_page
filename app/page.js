import Hero from "./hero/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Hero />
    </main>
  );
}
