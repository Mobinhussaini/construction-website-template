import HeroPage from "@/app/hero/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import PortfolioPage from "@/app/portfolio/page";
import WorkingPage from "@/app/working/page";
import TestimonialsPage from "@/app/testimonials/page";
import ContactPage from "@/app/contact/page";

export default function Home() {
    return (
        <>
            <HeroPage />
            <AboutPage />
            <ServicesPage />
            <PortfolioPage />
            <WorkingPage />
            <TestimonialsPage />
            <ContactPage />
        </>
    );
}
