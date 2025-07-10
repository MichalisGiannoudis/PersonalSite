export interface Project {
    title: string,
    image: string,
    endImage: string,
    description: string,
    phase: string,
    skills: string,
    link: string,
}

export interface Projects {
    projects: Project[],
}