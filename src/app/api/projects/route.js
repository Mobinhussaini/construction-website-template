import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

// General function to get all projects or a specific project by ID
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const projectId = searchParams.get("id"); // Get the project ID from the query parameters

        const db = await connectToDatabase();

        let query, params;

        if (projectId) {
            // If a project ID is provided, fetch the specific project by its ID
            query = `
                SELECT 
                    p.ID AS projectId,
                    p.title,
                    p.description,
                    p.contract_no,
                    p.client,
                    p.accomplishment_date,
                    p.type,
                    p.location,
                    i.image_url
                FROM past_projects p
                LEFT JOIN images i ON p.ID = i.project_id
                WHERE p.ID = ?
            `;
            params = [projectId];
        } else {
            // If no project ID is provided, fetch all projects
            query = `
                SELECT 
                    p.ID AS projectId,
                    p.title,
                    p.description,
                    p.contract_no,
                    p.client,
                    p.accomplishment_date,
                    p.type,
                    p.location,
                    i.image_url
                FROM past_projects p
                LEFT JOIN images i ON p.ID = i.project_id
            `;
            params = [];
        }

        // Execute the query
        const [rows] = await db.query(query, params);

        // If no projects found and no specific ID is provided, return an empty list
        if (rows.length === 0 && !projectId) {
            return NextResponse.json({ projects: [] });
        }

        // If a specific project is requested and not found, return 404
        if (rows.length === 0 && projectId) {
            return NextResponse.json(
                { message: "Project not found" },
                { status: 404 }
            );
        }

        // Group projects and their images
        const projectsMap = new Map();

        for (const row of rows) {
            if (!projectsMap.has(row.projectId)) {
                projectsMap.set(row.projectId, {
                    ID: row.projectId,
                    title: row.title,
                    description: row.description,
                    contract_no: row.contract_no,
                    client: row.client,
                    type: row.type, 
                    location:row.location,
                    accomplishment_date: row.accomplishment_date,
                    images: [],
                });
            }

            if (row.image_url) {
                projectsMap.get(row.projectId).images.push(row.image_url);
            }
        }

        const projects = Array.from(projectsMap.values());

        // If projectId was provided, return the specific project
        if (projectId) {
            return NextResponse.json({ project: projects[0] });
        }

        // Otherwise, return all projects
        return NextResponse.json({ projects });
    } catch (error) {
        console.error("Database query error:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
