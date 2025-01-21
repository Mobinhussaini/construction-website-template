import HeaderPage from "@/app/header/page";
import HeroPage from "@/app/hero/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import PortfolioPage from "@/app/portfolio/page";
import WorkingPage from "@/app/working/page";
import TestimonialsPage from "@/app/testimonials/page";
import ContactPage from "@/app/contact/page";
import FooterPage from "@/app/footer/page";
import BannerSection from "@/components/banner-section";

export default function Home() {
    return (
        <>
            <BannerSection />
            <HeaderPage />
            <HeroPage />
            <AboutPage />
            <ServicesPage />
            <PortfolioPage />
            <WorkingPage />
            <TestimonialsPage />
            <ContactPage />
            <FooterPage />
        </>
    );
}
