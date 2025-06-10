import mongoose from "mongoose";

const MONG_URI = process.env.MONG_URI;

if (!MONG_URI) {
    throw new Error('Your Mongo database connection is not defined! Kindly define MONG_URI');
}
// @ts-expect-error: To by-pass 'any' type declaration for global
let cached = global.mongoose;

if (!cached) {
    // @ts-expect-error: To by-pass 'any' type declaration for global
    cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONG_URI!, { bufferCommands: false })
    }

    cached.conn = await cached.promise;
    return cached.conn;
}