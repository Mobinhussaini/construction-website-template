import HeroPage from "@/app/hero/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import PortfolioPage from "@/app/portfolio/page";
import WorkingPage from "@/app/working/page";
import TestimonialsPage from "@/app/testimonials/page";
import ContactPage from "@/app/contact/page";

export default function Home() {
    // const insertProjects = async () => {
    //     const connection = await connectToDatabase();
    //   try {
    //     await connection.beginTransaction();

    //     // Insert projects
    //     for (const project of constructionProjects) {
    //       // Handle inconsistent year field name
    //       const year = project['Year  of Accomplishment'] || project.YearOfAccomplishment;

    //       // Insert main project data
    //       const [porjectResult ] = await connection.execute(
    //         `INSERT INTO past_projects
    //         (title, description, contract_no, client, accomplishment_date)
    //         VALUES (?, ?, ?, ?, ?)`,
    //         [
    //           project.title,
    //           project.description,
    //           project.Contract,
    //           project.Client,
    //           year,
    //         ]
    //       );

    //       const projectId = porjectResult.insertId;
    //       // Insert images
    //       if (project.images?.length > 0) {
    //         const imageValues = project.images.map(img => [projectId, img]);
    //         await connection.query(
    //           `INSERT INTO images (project_id, image_url)
    //           VALUES ?`,
    //           [imageValues]
    //         );
    //       }

    //       await connection.commit();
    //       console.log(`Inserted project ${projectId} with ${project.images?.length || 0} images`);

    //     }
    //   } catch (error) {
    //     await connection.rollback();
    //     console.error('Error inserting projects:', error);
    //     throw error;
    //   } finally {
    //     await connection.end();
    //   }
    // };

    // insertProjects().catch(console.error);

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
