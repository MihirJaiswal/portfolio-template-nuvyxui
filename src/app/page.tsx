import AboutMe from "../components/about/AboutMe";
import Education from "../components/career/Education";
import Work from "../components/career/Work";
import ContactForm from "../components/contact/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Hobbies } from "../components/hobbies/Hobbies";
import TopNav from "../components/Navbar";
import TechStack from "../components/techstack/TechStack";
export default function Home() {
  return (
    <div>
      <TopNav/>
      <div className="pt-16">
      <Hero/>
      <AboutMe/>
      <TechStack/>
      <Work/>
      <Education/>
      <Hobbies/>
      <ContactForm/>
      <Footer/>
      </div>
    </div>
  );
}
