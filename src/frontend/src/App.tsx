import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Registration from "@/components/Registration";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustStats from "@/components/TrustStats";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Courses />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
