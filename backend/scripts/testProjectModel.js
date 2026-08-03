import "dotenv/config";
import connectDatabase from "../src/config/database.js";
import Project from "../src/models/Project.js";

async function testProjectModel() {
  try {
    // Connect to MongoDB
    await connectDatabase();

    console.log("Connected to MongoDB.\n");

    // Create a sample project
    const project = new Project({
      title: "Personal Portfolio",
      slug: "personal-portfolio",
      summary: "My full-stack portfolio website.",
      problem: "Create a professional portfolio to showcase software projects.",
      solution: "Build a full-stack application using Vue, Express, and MongoDB.",
      architecture: "Vue frontend, Express backend, MongoDB Atlas database.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Mongoose"],
      challenges: "Designing a scalable backend structure.",
      lessonsLearned: "Incremental development leads to better understanding.",
      futureImprovements: "Add authentication and a Notebook system.",
      githubUrl: "https://github.com/example/portfolio",
      liveUrl: "https://example.com",
      thumbnailUrl: "https://example.com/image.png",
      featured: true,
      status: "draft",
    });

    // Save the document
    const savedProject = await project.save();

    console.log("Project saved successfully:");
    console.log(savedProject);

    // Retrieve the document
    const retrievedProject = await Project.findById(savedProject._id);

    console.log("\nRetrieved project:");
    console.log(retrievedProject);

    await Project.findByIdAndDelete(savedProject._id);
    console.log("\nTest document deleted.");
    
  } catch (error) {
    console.error("Error testing Project model:");
    console.error(error);
  } finally {
    process.exit(0);
  }


}

testProjectModel();