import About from "../components/About";
import AppCta from "../components/AppCta";
import Browse from "../components/Browse";
import Courses from "../components/Courses";
import Hero from "../components/Hero";

export default function Home({ query }) {
  return (
    <>
      <Hero />
      <Browse />
      <Courses query={query} />
      <About />
      <AppCta />
    </>
  );
}
