import AdminUpload from "@/components/AdminUpload";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FeesStructure from "@/components/FeesStructure";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import Registration from "@/components/Registration";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustStats from "@/components/TrustStats";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";

type PublicPage = "home" | "fees";
type Page = PublicPage | "admin";

function getInitialPage(): Page {
  if (typeof window !== "undefined" && window.location.hash === "#admin") {
    return "admin";
  }
  return "home";
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);

  const openModal = () => setIsModalOpen(true);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hidden /admin route — not in nav
  if (currentPage === "admin") {
    return (
      <>
        <AdminUpload />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Header
        openModal={openModal}
        currentPage={currentPage}
        onNavigate={(page: PublicPage) => handleNavigate(page)}
      />

      {currentPage === "fees" ? (
        <FeesStructure
          onNavigateHome={() => handleNavigate("home")}
          onOpenModal={openModal}
          onNavigateAdmin={() => handleNavigate("admin")}
        />
      ) : (
        <main>
          <Hero openModal={openModal} />
          <TrustStats />
          <Courses openModal={openModal} />
          <Services openModal={openModal} />
          <WhyChooseUs />
          <Testimonials />
          <Registration openModal={openModal} />
          <Contact openModal={openModal} />
        </main>
      )}

      {currentPage === "home" && (
        <Footer onNavigate={(page: PublicPage) => handleNavigate(page)} />
      )}

      <WhatsAppButton />
      <LeadCaptureModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Toaster />
    </div>
  );
}
