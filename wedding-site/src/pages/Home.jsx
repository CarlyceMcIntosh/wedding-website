import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <Hero />
        <OurStory />
        <section id="details" className="section page-container py-20">…</section>
        <section id="registry" className="section page-container py-20">…</section>
        <section id="travel" className="section page-container py-20">…</section>
        <section id="faq" className="section page-container py-20">…</section>
      </main>
    </>
  );
}
