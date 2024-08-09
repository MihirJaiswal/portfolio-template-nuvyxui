import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopNav from "@/components/Navbar";
export default function Home() {
  return (
    <div className="bg-bg1 dark:bg-bg8 md:dark:bg-bg7">
      <TopNav/>
      <Hero/>
      <Footer/>
    </div>
  );
}
