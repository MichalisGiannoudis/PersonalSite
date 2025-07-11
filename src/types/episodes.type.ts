export interface Episode {
    company: string,
    role: string,
    period: string,
    description: string,
    title: string,
    story: string[],
}

export interface Episodes {
    projects: Episode[],
}