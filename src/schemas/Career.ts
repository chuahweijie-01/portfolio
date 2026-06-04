import mongoose, { Schema, Document, models } from 'mongoose';

export interface ICareer extends Document {
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    isCurrent?: boolean;
    designation: string;
    company: string;
    location: string;
    description: string;
    stack: string[];
}

const CareerSchema: Schema = new Schema({
    startMonth: { type: Number, required: true },
    startYear: { type: Number, required: true },
    endMonth: { type: Number, required: false },
    endYear: { type: Number, required: false },
    isCurrent: { type: Boolean, required: false },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: [String], required: true },
    stack: { type: [String], required: true },
});

export default models.Career || mongoose.model<ICareer>('Career', CareerSchema);
