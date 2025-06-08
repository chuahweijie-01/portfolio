export type GetAllCareerResponse = {
    _id: string
    startMonth: number;
    startYear: number;
    endMonth: number | null;
    endYear: number | null;
    isCurrent: boolean;
    designation: string;
    company: string;
    location: string;
    description: string[];
    stack: string[]
}