import prisma from "@/lib/prisma";

const api = {
  getAllProjects: async () => {
    const projects = prisma.project.findMany();
    return projects;
  },
};

export default api;
