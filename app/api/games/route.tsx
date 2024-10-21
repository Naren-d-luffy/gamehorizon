import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri)

export async function GET(req:NextRequest) {
    try {
        await client.connect();
        const db =client.db('horizon')
        const collection = db.collection('game');
        const game = await collection.find({}).toArray();
        return NextResponse.json(game);
    } catch (error) {
        return NextResponse.json ({message: "Error finding Database",error:error}, {status:404})
    } finally{
        await client.close();
    }
}