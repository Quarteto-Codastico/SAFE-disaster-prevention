


export type Campaign = {
    id: string;
    name: string;
    description: string;
    goalAmount: number | null;
    raisedAmount: number | null;
    startDate: Date;
    endDate: Date;
    status: string;
}