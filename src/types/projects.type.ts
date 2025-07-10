export interface Project {
    title: string,
    shipImage: string,
    planetImage: string,
    description: string,
    phase: string,
    skills: string,
    screens: string,
    link: string,
}

export interface Projects {
    projects: Project[],
}